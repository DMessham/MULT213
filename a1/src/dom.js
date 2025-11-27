import { debugmode } from "./app.js";

//draw text to a html element
export function renderMessage(el, text) {
  el.innerHTML = `<p>${text}</p>`;
}

export function renderImage(el, imgsrc, alttext="") {
    el.innerHTML += `<img src="${imgsrc}">${alttext}</img>`;
  }

export function elementFromNode(node, type){
    let itemNode = document.createElement(type);
    itemNode.appendChild(node)
    return itemNode;
}
export function renderTable(parentEl, tableId, td, headingArray){
    if (debugmode){console.log("table gen", parentEl, tableId, td, headingArray)}
    //heading array is a array for the table leadings
    //td is a array where each item represents a row, with each row being an array with the first child being the "lable" for the row, and the rest being data that matches the order in the header
    let table = document.createElement("table");
    table.setAttribute("id", tableId);
    try {
        //make the header
        if (debugmode){console.log("reached table header gen")}
        let headerNode = document.createElement("tr");
        for(let col=0; col<headingArray.length; col++) {
            if (debugmode){console.log("begin table header item", col)}
            let itemNode = document.createElement("th");
            if (debugmode){console.log("table header node generated for item", col)}
            itemNode.innerHTML = headingArray[col];
            headerNode.appendChild(itemNode);
        }
        table.appendChild(headerNode);
        //make each row
        if (debugmode){console.log("reached table row gen")}
        for (let row=0; row<td.length; row++){
            if (debugmode){console.log("starting table row gen for row", row)}
            let rowNode = document.createElement("tr");
            //make each item in each row
            for (let col=0; col<td[row].length; col++) {
                if (debugmode){console.log("reached table col item gen row,col,value", row, col, td[row][col])};
                let itemNode = td[row][col];
                rowNode.appendChild(itemNode);
            }
            if (debugmode){console.log(`adding table row`, row)}
            table.appendChild(rowNode);
        }
        if (debugmode){console.log(`adding table to document`, table)}
        parentEl.appendChild(table)
        if (debugmode){console.log(`table added`, parentEl)}
    } catch (err) {
        //create a p element with the 'error' class that has an error message
        console.log("error in table building", err.message, err);
        let errNode = document.createElement("p")
        errNode.className="error"
        let errorMSG = document.createTextNode(`Table Build Error - ${err.message}`)
        errNode.appendChild(errorMSG)
        parentEl.appendChild(errNode)
        
    }
    
}

export function displayStopList(data){
    if (debugmode){console.log(`generating stoplist for`, data)}
    let message = "<table><tr><th>Stop name</th><th>location</th><th>latitude</th><th>longitude</th><th>onestop ID</th><th>Actions</th></tr>";
    data.forEach((item) => {
        if (debugmode){console.log(`generating stoplist for item`, item)}
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
    if (debugmode){console.log(`begin listbutton for`, query)}
    const stopOutput = document.querySelector("#stop-output"); 
    renderMessage(stopOutput, "Loading…");
    
    try {
        if (debugmode){console.log(`generating listbutton for`, query)}
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
        console.log(`error in listbutton`, err);
    }
};

