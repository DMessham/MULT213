// API function to integrate with Open-Meteo Geocoding and Weather APIs
// Reference: https://open-meteo.com/

import { renderMessage } from './dom.js';
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


const transitFeedID = "o-c9k0-saskatoontransit"; //saskatoon transit

const apiBaseURL = 'https://transit.land/api/v2/rest'

// api docs: https://www.transit.land/documentation/rest-api/routes

// /api/v2/rest/routes/{route_key} route format, 
// /api/v2/rest/routes/{route_key}.format adds format info

// /api/v2/rest/stops/{route_key}.format get stops


export async function fetchAllRoutes() {
  const res = await fetch(
    `${apiBaseURL}/routes?operator_onestop_id=${transitFeedID}&apikey=${apikey}&limit=50&include_stops=true`
  );

  const data = await res.json();

  console.log('Getting all routes', data);

  return data.results || [];
}

export function displayRouteList(data){
  let message = "<table><tr><th>#</th><th>Route full name</th><th>agency</th><th>onestop ID</th><th>Actions</th></tr>";
  data.forEach((item) => {
      const agency_info = item.agency
      const agency_name = `${agency_info.agency_name}`
      message += `<tr ><td style="border-left: 4px #${item.route_color} solid">${item.route_short_name}</td><td>${item.route_long_name}</td><td>${agency_info.agency_name}</td><td> ${item.onestop_id}</td></tr>`;
  });
  message += "</table>";
  return message
}

export function displayStopList(data){
  let message = "<table><tr><th>Stop name</th><th>location</th><th>latitude</th><th>longitude</th><th>onestop ID</th><th>Actions</th></tr>";
  data.forEach((item) => {
      const loc = item.place
      const location = `${loc.adm1_name}, ${loc.adm0_name}`
      const point = item.geometry
      const lat = `${point.coordinates[1]}`
      const lon = `${point.coordinates[0]}`
      message += `<tr><td>${item.stop_name}</td><td>${location}</td><td>${lat}</td><td>${lon}</td><td> ${item.onestop_id}</td><td><a href="https://maps.google.com/?q=${lat},${lon}">map link</a></td></tr>`;
  });
  message += "</table>";
  return message
}

fetchAllRoutes()

export async function fetchRouteStops(route) {
  const res = await fetch(
    `${apiBaseURL}/stops?operator_onestop_id=${transitFeedID}&served_by_onestop_ids=${route}&apikey=${apikey}`
  );

  const data = await res.json();
  console.log('getting all stops on route ID: ', route, data)

  return data.stops || [];
}

export async function fetchStopsLocation(lat, lon) {
  const res = await fetch(
    `${apiBaseURL}/stops?operator_onestop_id=${transitFeedID}&lat=${lat}&lon=${lon}&radius=250&apikey=${apikey}`
  );

  const data = await res.json();

  console.log(`getting stops near: ${lat}, ${lon}`, data);

  return data.stops || [];
}

export async function fetchRoutesByCommonStop(stopID) {
  const res = await fetch(
    `${apiBaseURL}/routes?operator_onestop_id=${transitFeedID}&served_by_onestop_ids=${stopID}&apikey=${apikey}`
  );

  const data = await res.json();
  console.log('getting all Routes using stop ID: ', stopID, data)

  return data.stops || [];
}

export async function fetchStop(stopID) {
  const res = await fetch(
    `${apiBaseURL}/stopa?operator_onestop_id=${transitFeedID}&served_by_onestop_ids=${stopID}&apikey=${apikey}`
  );

  const data = await res.json();
  console.log('getting all Routes using stop ID: ', stopID, data)

  return data.stops || [];
}

export async function searchRoutes(query) {
  const res = await fetch(
    `${apiBaseURL}/routes?operator_onestop_id=${transitFeedID}&search=${query}&apikey=${apikey}`
  );

  const data = await res.json();
  console.log('getting all Routes matching:', query, data)

  return data || [];
}

export async function searchStops(query) {
  const res = await fetch(
    `${apiBaseURL}/stops?operator_onestop_id=${transitFeedID}&search=${query}&apikey=${apikey}`
  );

  const data = await res.json();
  console.log('getting all Stops matching:', query, data)

  return data.stops || [];
}

// fetchAllRoutes()

// fetchRouteStops('r-c9k0q-87')




// getNearbyStops()