## pain points
The component library i used made things more difficult than they needed to be with bad documentation

I made the mistake of assuming it would be reasy to make the stop list function work with the rotelist as a dropdown, but didnt realise that the format that the api sends inside a object in the route response is different than the object it sends when you search directly for routes. WHY. i get not including some of the details, but not even including the onsestop id that a lot of the stop related api functions use is annoying.

i gave up on the geolocation stuff because i spent so long just trying to get the stop list functions to work with both formats that i ran out of time and patience

## the good

Getting google maps apis working was way nicer than what A1 had, which was static images. maybe ill return to this later and properly integrate them.

also the api limits for transit land are quite lenient, i accadentally made it get the entire list of routes and stops everytime something on the page updated, while also bassically creating an infinite loop that i had to use task manager to kill firefox, but the api didnt block me.

## goals

- [-] Reach feature parity with A1
    - almost!
- [v] Add a working map that can be scrolled
    - [ ] show search results on map
    - [] click on map to show stiff nearby

