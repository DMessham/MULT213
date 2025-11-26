import { renderMessage, displayStopList, displayListButtonEvent } from "./dom.js";
import { fetchStopsLocation, fetchRouteStops, searchRoutes, searchStops } from "./api.js";

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
    e.preventDefault();
    // from https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
    navigator.geolocation.getCurrentPosition((position) => {
        latitude = position.coords.latitude
        longitude = position.coords.longitude
    });

    renderMessage(nearbyList, "Loading…");

    try {
        //check if there is any data and display it
        
        let data = await fetchStopsLocation(latitude, longitude);
        if (data.length === 0) {
            renderMessage(nearbyList, `No results found within 250m`);
            return;
        }
        
        let message = `Found ${data.length} result(s) within 250m of latitude:${latitude} lon:${longitude}:`;
        
        message += displayStopList(data)
        
        renderMessage(nearbyList, message);
    } catch (err) {
        renderMessage(nearbyList, `Error: ${err.message}, It may take a few seconds to get your location. Wait and try again.`);
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
        const data = await searchRoutes(route);
        if (data.length === 0) {
            renderMessage(routeOutput, `No results found for "${route}".`);
            return;
        }
        
        let message = `Found ${data.routes.length} result(s) for "${route}":`;
        
        message += "<table><tr><th>#</th><th>Route full name</th><th>agency</th><th>onestop ID</th><th>Actions</th></tr>";
        data.routes.forEach((item) => {
            //because the routes list is special, and its only used here, it isnt broken out into a function in dom.js like stops are
            //route color doesnt seem to match saskatoon transit's offical app, it might be from the routemap pdf
            const agency_info = item.agency
            const agency_name = `${agency_info.agency_name}` //dont use anything else from transit info right now

            message += `<tr >
                <td style="border-left: 4px #${item.route_color} solid">${item.route_short_name}</td>
                <td>${item.route_long_name}</td>
                <td>${agency_info.agency_name}</td>
                <td>${item.onestop_id}</td>
                <td><button type="button" 
                    id="${item.onestop_id}" 
                    onclick="navigator.clipboard.writeText('${item.onestop_id}');alert('Copied ${item.onestop_id} to clipboard')">
                    Copy ID
                </button>
                `;//clipboard
            message+="</td></tr>"
            
        });
        message += "</table>";
        
        
        renderMessage(routeList, message);

        //now to add an even listener for the buttons that show each stop in a route
        data.routes.forEach((item) => {
            document.querySelector(`#${item.onestop_id}`).addEventListener("onClick", async (e) => {
                //display a list of stops along that route
                // displayListButtonEvent(item.onestop_id)
                alert("This feature is WIP, check console for a list of stops")
                // console.log(`stops for ${item.onestop_id}`, fetchRouteStops(item.onestop_id))
            })
        })
    } catch (err) {
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

