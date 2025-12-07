export function Card(props){
    //feature plans
        //props.title
        //props.subtitle - (optional) 
        //props.text - main body text
        //props.show - bool feature flags - could also check for null or auto choose if it exists
            //show.title
            //show.subtitle
            //show.image
            //show.text
            //show.actions
        //props.image.url - (optional) the url of an image
        //props.image.alt - (optional) the alt text for an image, requires props.url
        //props.actions - 
    // end docs
    if (props.show.title){
        console.log("card debug- show title")
    }
    if (props.show.image){
        console.log("card debug- show image")
    }
    //show body text
    if (props.show.text){
        console.log("card debug- show body text")
    }
    //show actions
    if (props.show.actions){
        console.log("card debug- show actions")
    }

    return( <li class="todo-item">
        <div class="card" >
          <header>
            {item.name}
          </header>
          <main>
          <input type="checkbox" class="todo-item__checkbox" data-id={i} id={"todo-" + i} />
          <label for={"todo-" + i} class="todo-item__label">done</label>
          </main>
          
        </div>
        
      </li>
    )}
}