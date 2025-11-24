export function renderMessage(el, text) {
  el.innerHTML = `<p>${text}</p>`;
}

const stopOutput = document.querySelector("#stop-output");

// export function displayRouteList(data){
// };

export function displayStopList(data){
    let message = "<table><tr><th>Stop name</th><th>location</th><th>latitude</th><th>longitude</th><th>onestop ID</th><th>Actions</th></tr>";
    data.forEach((item) => {
        const loc = item.place
        const location = `${loc.adm1_name}, ${loc.adm0_name}`
        const point = item.geometry
        const lat = `${point.coordinates[1]}`
        const lon = `${point.coordinates[0]}`
        message += `<tr>
            <td>${item.stop_name}</td>
            <td>${location}</td>
            <td>${lat}</td>
            <td>${lon}</td>
            <td> ${item.onestop_id}</td>
            <td><a href="https://maps.google.com/?q=${lat},${lon}">map link</a></td>
        </tr>`;
    });
    message += "</table>";
    return message
  }

  export async function displayListButtonEvent(query){
    renderMessage(stopOutput, "Loading…");

    try {
        const data = await fetchRouteStops(query);
        if (data.length === 0) {
            renderMessage(stopOutput, `No results found for "${query}".`);
            return;
        }
        
        let message = `Found ${data.length} result(s) for ${query}`;
        
        message += displayStopList(data)
        
        renderMessage(stopOutput, message);
    } catch (err) {
        renderMessage(stopOutput, `Error: ${err.message}`);
    }
};