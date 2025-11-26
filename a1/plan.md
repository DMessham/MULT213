# DMessham's Transit Tracker
Started: Wed 2025/11/19, 11:32
finished: Wed 2025/11/26. 11:06

# Goal
A web app i can use use for the buses in my city, that will work on devices that the official app doesnt support

## FOR A1
get & display nearby stops
search routes in the city
see all stops along a route

## initial Planned features (LONG TERM)
    - realtime info for routes i use frequently
    - more complex route planning
    -    - multiple sets of routes that can switch between lines at predefined points automatically if a bus is late, canceled, etc. 
            Example: there are 3 ways to go from A to B, 2 ways from B to C, 3 from C to D, along with a route that goes A > E > C > D. switch between different ones to get there faster, or if delays might cause a transfer to be missed
        - reduce api usage by caching info about schedules, and the best connections to use when the bus is within that schedule, only using the api for route planning if the realtime info indicates that it wont be possible
    - (optional) Map of realtime bus locations along a selected routes that share a stop
    -   - If a bus that is packed shows up, or if i barely miss it, i want to be able to know if i can just take another one after, even of its a slightly slower
    - (optional) turn by turn when walking between stops 
    -   - OR a way to easily start a googlemaps, OSM, etc. trip



# Api i am using
https://www.transit.land/operators/o-c9k0-saskatoontransit#routes

## related resources
https://www.transit.land/plans-pricing/#transitland-apis



# Routes i care about
number | name | onestop ID | Source Feed ID | notes

08 | 8th Street / City Centre | r-c9k0m-08 | 14405 | the main connection between 2 main hubs, comes every 10 mins
87 | The Meadows / Centre Mall | r-c9k0q-87 | 14453 | almost always transfer to 08, weekdays only
86 | Rosewood /  Centre Mall | r-c9k0q-86 | 14454 | backup for the 87, it's never on time

---to/from school (when walking isnt faster)
07 | Dundonald / City Centre | r-c9k0e-07 | 14404 | alt to 30
30 | Lawson Heights / City Centre | r-c9k0t-30 | 14421 | The main bus i take from downtown
35 | Silverwood / City Centre | r-c9k0t-35 | 14431 | backup for the 30

-- less frequently used
43 | Evergreen / City Centre | r-c9k0-43 | 14434 | doc
55 | Lakeridge / University | r-c9k0q-55 | 14442 | comes every 40 mins, often has bendy busses :)

