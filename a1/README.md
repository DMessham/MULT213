# DMessham's TransitTrac
Started: Wed 2025/11/19, 11:32
M1 reached: Wed 2025/11/26. 11:10

# Current Features

1. get & display nearby stops
2. search routes in the city
3. search all stops (in the world lol)
4. see all stops along a route

# Instructions

1. Read the `package.json`
2. Run `npm install`
3. Get an api key for https://www.transit.land and put it in `key.js` as an exported variable called "apikey"
4. Run `npm run watch`
  - Bundle up your JS for you
  - Put the bundle into `dist/main.js`
5. Open your `index.html` and test out your application

# Project Structure

1. Model / API stuff in `api.js`
2. View Layer / UI stuff in `dom.js`
3. Application / Controller logic in `app.js`
4. Private data in `key.js`
5. [future use] alerts and messages in `alert.js`

# Planned features
1. integrated map display (probably OSM based)
2. basic single-route navigation (find the closest stops to the start and end, then check what routes cover both)
3. multi-route navigation (find routes that have common stops, or stops within a certain distince)
4. alerts for stops closed, detours and service interuptions
5. real time bus location
6. real time turn-by-turn style navigation