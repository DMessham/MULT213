export function Card(props){
    //feature plans
        //props.title
        //props.subtitle - (optional) 
        //props.text - main body text
        //props.image.url - (optional) the url of an image
        //props.image.alt - (optional) the alt text for an image, requires props.url
        //props.actions - (WONTDO - maybe for a later project)
    // end docs

    const contentElement = (props.text ? <p>{props.text}</p> : null)

    const subtitleElement = (props.subtitle ? <p>{props.subtitle}</p> : null)

    const titleElement = (props.title ? <h2>{props.title}</h2> : null)

    const imageElement = (props.image ? <img src={props.image} /> : null)

    // for (i=0; i<props.actions.length; i++){
    //     actionElement += (props.actions[i]? <a href={props.actions[i].href}>{props.actions[i].text}</a> : null)
    // }

    return(
        <div class="card" >
            <header>
                {titleElement}
                {subtitleElement}
            </header>
            <main>
                {imageElement}
                {contentElement}
                {/* <input type="checkbox" class="todo-item__checkbox" data-id={i} id={"todo-" + i} /> */}
                {/* <label for={"todo-" + i} class="todo-item__label">done</label> */}
            </main>
        </div>
    )
}