# dootis app plan
 - todo app
 - maybe add email for a blackberry hub clone w/ email and social media

# components
- `header`
    - title and message properties
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
        - with title & body as strings
        - id number
        - due date (optional)
        - creation/ update date (optional)
        - state
        - repitition (optional) - ical rrules
- card
- footer

# devtasks
- [] make header component
- [] make list component
- [] make card component
- [] make footer component

# data transformation
- user actions:
    - add a TODO
    - edit it
        - change it
        - mark as completed
        - change color
        - delete
    - ical rrules for schedules