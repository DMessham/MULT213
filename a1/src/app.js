import { renderMessage, displayStopList, displayListButtonEvent, renderImage, renderTable } from "./dom.js";
import { fetchStopsLocation, fetchRouteStops, searchRoutes, searchStops, fetchAreaImage} from "./api.js";

export const debugmode=true;

console.log(`app debug mode is`, debugmode)
// Grab references to various parts of the HTML page

const nearbyForm = document.querySelector("#nearby-form");
const nearbyList = document.querySelector("#nearby-list");

const routeForm = document.querySelector("#route-form");
const routeList = document.querySelector("#route-list");

const stopForm = document.querySelector("#stop-form");
const stopOutput = document.querySelector("#stop-output");

const routestopForm = document.querySelector("#routestop-form");
const routestopOutput = document.querySelector("#routestop-output");

const routeListTableButton = document.querySelector("table tr td button");

// for seeing nearby routes
nearbyForm.addEventListener("submit", async (e) => {
    if (debugmode){console.log(`getting location`, e)}
    e.preventDefault();
    let nav = navigator.geolocation
    const radius = 250
    // based off https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
    nav.getCurrentPosition((position) => {
        latitude = position.coords.latitude
        longitude = position.coords.longitude
        if (debugmode){console.log(`latitude is`, latitude)}
        if (debugmode){console.log(`longitude is`, longitude)}
    });

    renderMessage(nearbyList, "Loading…");

    try {
        //check if there is any data and display it
        
        let data = await fetchStopsLocation(latitude, longitude, radius);
        let img = await fetchAreaImage(latitude, longitude, radius);
        if (data.length === 0) {
            renderMessage(nearbyList, `No results found within ${radius}m`);
            return;
        }
        
        let message = `Found ${data.length} result(s) within ${radius}m of latitude:${latitude} lon:${longitude}:`;
        
        message += displayStopList(data)
        
        renderMessage(nearbyList, message);

        renderImage(nearbyList, img)
    } catch (err) {
        renderMessage(nearbyList, `Error: ${err.message}, It may take a few seconds to get your location. Wait and try again.`);
        console.log("error in nearby stops:", err.message, err)
    }
});

//search routes
routeForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const route = document.querySelector("#route").value;
    if (!route) return;

    renderMessage(routeList, "Loading…");

    try {
        //check if there is any data and display it
        if (debugmode){console.log(`searching for`, route)}
        const data = await searchRoutes(route);
        if (debugmode){console.log(`results for search:`, data.length)}
        if (data.length === 0) {
            renderMessage(routeOutput, `No results found for "${route}".`);
            return;
        }
        
        let message = `Found ${data.routes.length} result(s) for "${route}":`;
        let tableArray = []
        let headerArray = ["#", "Route Name", 'Agency', 'onestopID', 'Actions']

        // message += "<table><tr><th>#</th><th>Route full name</th><th>agency</th><th>onestop ID</th><th>Actions</th></tr>";
        const actionButtonText = "stops"
        if (debugmode){console.log(`preparing table for`, route)}
        data.routes.forEach((item) => {
            if (debugmode){console.log(`preparing table item`, item)}
            //because the routes list is special, and its only used here, it isnt broken out into a function in dom.js like stops are
            //route color doesnt seem to match saskatoon transit's offical app, it might be from the routemap pdf
            const agency_info = item.agency
            const agency_name = `${agency_info.agency_name}` //dont use anything else from transit info right now

            // message += `<tr>
            //     <td style="border-left: 4px #${item.route_color} solid">${item.route_short_name}</td>
            //     <td>${item.route_long_name}</td>
            //     <td>${agency_info.agency_name}</td>
            //     <td>${item.onestop_id}</td>
            //     <td><button type="button" 
            //         id="${item.onestop_id}" 
            //         onclick="navigator.clipboard.writeText('${item.onestop_id}');alert('Copied ${item.onestop_id} to clipboard');">
            //         Copy ID
            //     </button>
            //     `;//clipboard
            // message+="</td></tr>"
            let actionButtonE = document.createElement("button");
            actionButtonE.appendChild(document.createTextNode(actionButtonText))
            actionButtonE.setAttribute('onClick', `displayListButtonEvent(${item.onestop_id})`)
            tableArray += [document.createTextNode(item.route_short_name), document.createTextNode(item.route_long_name), document.createTextNode(agency_name), document.createTextNode(item.onestop_id), actionButtonE]
        });
        // message += "</table>";
        
        
        renderMessage(routeList, message);
        renderTable(routeList, "routeSearchResults", tableArray, headerArray)
        
    } catch (err) {
        console.log(err)
        renderMessage(routeList, `Error - ${err.message}`);
    }
});

// searching all stops
stopForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const stop = document.querySelector("#stop").value.trim();
    if (!stop) return;

    renderMessage(stopOutput, "Loading…");

    try {
        //check if there is any data and display it
        const data = await searchStops(stop);
        if (data.length === 0) {
            renderMessage(stopOutput, `No results found for "${stop}".`);
            return;
        }
        
        let message = `Found ${data.length} result(s) for "${stop}":`;
        
        message += displayStopList(data)
        
        renderMessage(stopOutput, message);
    } catch (err) {
        renderMessage(stopOutput, `Error: ${err.message}`);
    }
});

//for searching stops along a route
routestopForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const routestop = document.querySelector("#routestop").value;
    if (!routestop) return;

    renderMessage(routestopOutput, "Loading…");

    try {
        //check if there is any data and display it
        const data = await fetchRouteStops(routestop);
        if (data.length === 0) {
            renderMessage(routestopOutput, `No results found for "${routestop}".`);
            return;
        }
        
        let message = `Found ${data.length} result(s) for "${routestop}":`;
        
        message += displayStopList(data)

        
        renderMessage(routestopOutput, message);
        
    } catch (err) {
        renderMessage(routestopOutput, `Error: ${err.message}`);
    }
});

