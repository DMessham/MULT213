
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
      return( <li class="todo-item">
        <Card title={item.name} content="todo item"></Card>
      </li>
    )})
  }
  return ( <>
  <section>
          <h2>My TODOs:</h2>
          <ul className="todo-list" id="todo-list">
            {listContent}
    </ul>
  </section>
  </>

  )
  
}