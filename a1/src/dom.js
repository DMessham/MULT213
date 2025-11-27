//draw text to a html element
export function renderMessage(el, text) {
  el.innerHTML = `<p>${text}</p>`;
}

export function renderImage(el, imgsrc, alttext="") {
    el.innerHTML += `<img src="${imgsrc}">${alttext}</img>`;
  }

export function renderTable(parentEl, tableId, td, headingArray){
    //heading array is a array for the table leadings
    //td is a array where each item represents a row, with each row being an array with the first child being the "lable" for the row, and the rest being data that matches the order in the header
    let table = document.createElement("table");
    table.setAttribute("id", tableId);
    try {
        //make the header
        let headerNode = document.createElement("tr");
        for (col=0; col++; col<td[row].length) {
            let itemNode = document.createElement("th");
                itemNode.appendChild(headingArray[col]);
                headerNode.appendChild(itemNode);
        }
        table.appendChild(headerNode);
        //make each row
        for(row=0; row++; row<td.length){
            let rowNode = document.createElement("tr");
            //make each column in each row
            for (col=0; col++; col<td[row].length) {
                let itemNode = document.createElement("tr");
                itemNode.appendChild(headingArray[col]);
                rowNode.appendChild(itemNode);
            }
            table.appendChild(rowNode);
        }
        parentEl.appendChild(table)
    } catch (err) {
        //create a p element with the 'error' class that has an error message
        let errNode = document.createElement("p")
        errNode.className="error"
        let errorMSG = document.createTextNode(`Table Build Error - ${err.message}`)
        errNode.appendChild(errorMSG)
        parentEl.appendChild(errNode)
        console.log("error in table building", err.message, err)
    }
    
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