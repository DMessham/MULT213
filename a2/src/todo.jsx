export function todoList (todos){
    // Build up the UI element for the TODOs
  let listContent = <></>;

  if (todos.length == 0) {
    // If there are no TODOs, tell the user what to do
    listContent = <li className="todo-list__empty">No tasks yet. Add your first TODO above.</li>;
  } else {
    // If there are TODOs, render them as li elements containg a div for the cards
    listContent = todos.map((item, i) => {
      return <li class="todo-item">
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
    })
  }
}