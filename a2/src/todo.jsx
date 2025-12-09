
import { Card } from './card.jsx';
export function TodoList (props){
    // Build up the UI element for the TODOs
  let listContent = <></>;
  const todos = props.todos

  if (todos.length == 0) {
    // If there are no TODOs, tell the user what to do
    listContent = <li className="todo-list__empty">No tasks yet. Add your first TODO above.</li>;
  } else {
    // If there are TODOs, render them as li elements containg a div for the cards
    listContent = todos.map((item, i) => {
      const id = (props.id ? props.id : i);
      const contentText = (item.text ? item.text : (item.name ? item.name : null) );
      let actions = <>

        <input type="checkbox" className="todo-item__checkbox" data-id={id} id={"todo-" + id} />
        <label for={"todo-" + id} className="todo-item__label">done</label>

      <button className='todoDelete' data-id={id} id={"todo-" + id + "-delete"}>Delete</button>
      
      </>
      
      return( <li class="todo-item">
        <Card content={contentText} title="todo item" actions={actions} ></Card>
      </li>
    )})
  }
  return ( <>
  <section >
      <h2>My TODOs:</h2>
            <ul className="todo-list" id="todo-list">
              {listContent}
      </ul>
          
  </section>
  </>

  )
  
}