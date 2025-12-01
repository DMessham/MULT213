# dootis app plan
 - todo app
 - maybe add email for a blackberry hub clone w/ creating events from emails (ex: flights, appointments)

## Resources used
- react

## potential resources
- https://www.material-toys.com/
- https://actifyjs.com/getting-started/installation
- https://mui.com/material-ui/

# devtasks
- [] make header component
- [] make list component
- [] make card component
- [] make footer component

# components
- `header`
    - title and message properties
- `nav` (eventually)
     - section navigation
- `list`
    - A list of things to do
    - takes in an array of `todo`s displayed w/ cards
- `card`
    - `title` displayed at top (required)
    - `subtitle` (optional)
    - `content` (optional)
    - `image` (optional)
- `footer`

# data model

- header
    - title and message strings
- list
    - An array of objects
        - with `title` & `body` as strings
        - `id number`
        - `due date` (optional)
        - `creation`/ update date (optional)
        - `state` 
            - `done` bool

        - `repitition` (optional) - ical rrules
        - `assigned to`
- card
- footer


## data transformation
- user actions:
    - add a TODO
    - edit it
        - change it
        - mark as completed
        - change color
        - delete
    - ical rrules for schedules

### making a new todo
- create new todo object
- push into array

### mark it as done
- toggle checkbox
- move it to done setion