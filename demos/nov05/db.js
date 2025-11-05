//persistant data time!

import fs from "fs";
const datafolder = "./data/"
// 2 main methods
// fs.readFileSync
// fs.writeFileSync

//we can can only write text data (or binary)

//take data and use json.stringify to convert to text

export const writeData = (filename, jsonData) => {
    //convert data to text
    const jsonStr = JSON.stringify(jsonData);
    //write it out
    fs.writeFileSync(datafolder + filename, jsonStr);
    console.log(`Data written to ${filename}`)
}

const someData = {
    "name":"alice",
    "score": 42,
    "moves": [
        'r',
        'p',
        's',
        'r'
    ]
}

writeData("alice.json", someData)