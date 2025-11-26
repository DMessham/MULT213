# Challenges
- Async stuff has annoying syntax, and doest work like i expect for things like getting the current location
- The api uses different names for the same info on different endpoints, and some things i wanted are expected to be done client side (which is fair, it is a free api)
- putting a button that lists all the stops in a route from the search results did not work
        - adding buttons calling functions within a table made using template literals feeding a function meant for just simple status text is probably where the issue is, but i don't want to redo all that table stuff when that might not even be the problem, for all i know i might have to export functions from app.js to call them from inline js in the html or the console.
- 
# new concepts
- connecting to apis with my own code (i have gotten my own api keys for youtube and weather services for 3rd party apps before)
- dealing with async
- using arrow functions
- dealing with browser permissions stuff, like writing to the clipboard or getting the current location
- using .gitignore to protect api keys
- managing multiple js files, and calling fuctions across them
# improvements
- display stops and routes on a map using something like OpenStreetMap (I know a bit about how OSM works from converting new maps to work on my 19yr old garmin60cx, and removing things like image data and building interiors to fit memory limits)
- proper filtering when searching stops, so it only shows stops within the city
- A way to see all routes that use a stop
- Data caching (like stop locations and routes) instead of calling the api everytime it needs some info, even if just for the session
- combine the 2 search boxes for the title of routes & stops with radio buttons to select routes or stops