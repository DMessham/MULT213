// API function to integrate with Open-Meteo Geocoding and Weather APIs
// Reference: https://open-meteo.com/

import {apikey} from './key.js'

export async function searchCity(city) {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`
  );

  const data = await res.json();

  console.log(data);

  return data.results || [];
}

export async function fetchWeather(lat, lon) {
  // Hardcode coordinates or use a simple free API.
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
  );

  const data = await res.json();

  console.log(data);

  return data.current_weather ?? "N/A";
}


const transitFeedID = "f-c9k0-saskatoontransit"; //saskatoon transit

const apiBaseURL = 'https://transit.land/api/v2/rest'

// api docs: https://www.transit.land/documentation/rest-api/routes

// /api/v2/rest/routes/{route_key} route format, 
// /api/v2/rest/routes/{route_key}.format adds format info

// /api/v2/rest/stops/{route_key}.format get stops

export async function fetchRoutes(lat, lon) {
  const res = await fetch(
    `${apiBaseURL}/routes?agency_key=${transitFeedID}&lat=${lat}&lon=${lon}&apikey=${apikey}`
  );

  const data = await res.json();

  console.log(data);
}

export async function fetchAllRoutes() {
  const res = await fetch(
    `${apiBaseURL}/routes?agency_key=${transitFeedID}&apikey=${apikey}`
  );

  const data = await res.json();

  console.log(data);
}

export async function fetchRouteStops(route) {
  const res = await fetch(
    `${apiBaseURL}/stops?agency_key=${transitFeedID}&served_by_onestop_ids=${route}&apikey=${apikey}`
  );

  const data = await res.json();

  console.log(data);
}

export async function fetchStopsLocation(lat, lon) {
  const res = await fetch(
    `${apiBaseURL}/stops?agency_key=${transitFeedID}&lat=${lat}&lon=${lon}&apikey=${apikey}`
  );

  const data = await res.json();

  console.log(data);
}

fetchAllRoutes()

export async function fetchStopsR87() {
  const res = await fetch(
    `${apiBaseURL}/stops?served_by_onestop_ids=r-c9k0q-87&apikey=${apikey}`
  );

  const data = await res.json();

  console.log(data);
}

fetchStopsR87()



function getNearbyStops(){
  // from https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
navigator.geolocation.getCurrentPosition((position) => {
  fetchStopsLocation(position.coords.latitude, position.coords.longitude);
});
}

getNearbyStops()