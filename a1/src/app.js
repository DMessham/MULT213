import { renderMessage } from "./dom.js";
import { searchCity, displayStopList, fetchStopsLocation, fetchRouteStops, displayRouteList, searchRoutes, searchStops } from "./api.js";

// Grab references to various parts of the HTML page
const cityForm = document.querySelector("#city-form");
const cityList = document.querySelector("#city-list");
const weatherOutput = document.querySelector("#weather-output");

const nearbyForm = document.querySelector("#nearby-form");
const nearbyList = document.querySelector("#nearby-list");
const routeForm = document.querySelector("#route-form");
const routeList = document.querySelector("#route-list");
const stopForm = document.querySelector("#stop-form");
const stopOutput = document.querySelector("#stop-output");

// weatherForm.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const latStr = document.querySelector("#lat").value.trim();
//     const lonStr = document.querySelector("#lon").value.trim();

//     if (!latStr || !lonStr) {
//         renderMessage(weatherOutput, "Please provide both latitude and longitude.");
//         return;
//     }

//     const lat = parseFloat(latStr);
//     const lon = parseFloat(lonStr);
//     if (Number.isNaN(lat) || Number.isNaN(lon)) {
//         renderMessage(weatherOutput, "Latitude and longitude must be valid numbers.");
//         return;
//     }

//     renderMessage(weatherOutput, "Loading Weather Data…");

//     try {
//         const weather = await fetchWeather(lat, lon);
//         renderMessage(weatherOutput, `<pre>${JSON.stringify(weather, null, 2)}</pre>`);
//     } catch (err) {
//         renderMessage(weatherOutput, `Error: ${err.message}`);
//     }
// });

nearbyForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    // from https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
    navigator.geolocation.getCurrentPosition((position) => {
        latitude = position.coords.latitude
        longitude = position.coords.longitude
    });

    renderMessage(nearbyList, "Loading…");

    try {
        // const data = await getNearbyStops();
        
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

routeForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const route = document.querySelector("#route").value;
    if (!route) return;

    renderMessage(routeList, "Loading…");

    try {
        const data = await searchRoutes(route);
        if (data.length === 0) {
            renderMessage(routeOutput, `No results found for "${route}".`);
            return;
        }
        
        let message = `Found ${data.routes.length} result(s) for "${route}":`;
        
        message += displayRouteList(data.routes)
        
        renderMessage(routeList, message);
    } catch (err) {
        renderMessage(routeList, `Error: ${err.message}`);
    }
    // e.preventDefault();

    // const route = document.querySelector("#route").value.trim();
    // if (!route) return;

    // renderMessage(routeList, "Loading…");

    // try {
    //     const data = await searchRoutes(route);
    //     if (data.length === 0) {
    //         renderMessage(routeList, `No results found for "${route}".`);
    //         return;
    //     }
        
    //     let message = `Found ${data.length} result(s) for "${route}":`;
        
    //     message += "<ul>";
    //     data.forEach((item) => {
    //         message += `<li>${item.route_name} (onestop ID: ${item.onestop_id})</li>`;
    //     });
    //     message += "</ul>";
        
    //     renderMessage(routeList, message);
    // } catch (err) {
    //     renderMessage(routeList, `Error: ${err.message}`);
    // }
});

stopForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const stop = document.querySelector("#stop").value.trim();
    if (!stop) return;

    renderMessage(stopOutput, "Loading…");

    try {
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