export function Card(props){
    //feature plans
        //props.title
        //props.subtitle - (optional) 
        //props.content - main body text
        //props.image.url - (optional) the url of an image
        //props.image.alt - (optional) the alt text for an image, requires props.url
        //props.actions - (WONTDO - maybe for a later project)
    // end docs

    const contentElement = (props.content ? <p>{props.content}</p> : null)

    const subtitleElement = (props.subtitle ? <p>{props.subtitle}</p> : null)

    const titleElement = (props.title ? <h2>{props.title}</h2> : null)

    const imageElement = (props.image ? <img src={props.image} /> : null)

    const actionsElement = (props.actions ? <>{props.actions}</> : null)
    // for (i=0; i<props.actions.length; i++){
    //     actionElement += (props.actions[i]? <a href={props.actions[i].href}>{props.actions[i].content}</a> : null)
    // }

    return(
        <div className="card" >
            <header>
                {titleElement}
                {subtitleElement}
            </header>
            <main>
                {imageElement}
                {contentElement}
            </main>
            <footer>
                {actionsElement}
            </footer>
        </div>
    )
}