//draw text to a html element
export function renderMessage(el, text) {
  el.innerHTML = `<p>${text}</p>`;
}

export function displayStopList(data){
    let message = "<table><tr><th>Stop name</th><th>location</th><th>latitude</th><th>longitude</th><th>onestop ID</th><th>Actions</th></tr>";
    data.forEach((item) => {
        const loc = item.place
        const location = `${loc.adm1_name}, ${loc.adm0_name}`
        const point = item.geometry
        const lat = `${point.coordinates[1]}`
        const lon = `${point.coordinates[0]}`
        // build the table row
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
    
    const stopOutput = document.querySelector("#stop-output"); 
    renderMessage(stopOutput, "Loading…");
    
    try {
        const data = await fetchRouteStops(query);
        if (data.length === 0) {
            //no data, something has gone wrong
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