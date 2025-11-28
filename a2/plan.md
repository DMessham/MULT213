# dootis app plan
 - todo app
 - maybe add email for a blackberry hub clone w/ email and social media

# components
- `header`
    - title and message properties
- `list`
    - A list of things to do
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
        - repitition (optional)
- card
- footer

# devtasks
- [] make header component
- [] make list component
- [] make card component
- [] make footer component