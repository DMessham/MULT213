import './App.css';
import './card.css';
import { useState } from 'react';
import { Card } from './card.jsx';
import { todoList } from './todo.jsx';
import { Header, Footer } from './page.jsx';



function App() {
  // Define the TODO models
  const [todos, setTodos] = useState([]);

  

  // Set up add new TODO form handler
  const handleFormSubmit = (formData) => {
    const titleField = formData.get('title');
    console.log(`Handling new TODO: ${titleField}`);

    // Make new TODO model
    const newTodo = {
      name: titleField
    };

    // We need to make a new list, otherwise React will not update
    const newTodos = [...todos, newTodo];

    // We call the React hook to update the application state
    setTodos(newTodos);
  };
  

  return (
    <>
      <Header title="Welcome to My Website!" message="Thanks for visiting my site." />

      <main>
        <section>
          <form id="todo-form" action={handleFormSubmit}>
            <input
              className="todo-form__input"
              id="todo-input"
              name="title"
              type="text"
              placeholder="Add a new task…"
              autoComplete="off"
              required
            />
            <button className="todo-form__button" type="submit">Add</button>
          </form>
        </section>

        <section>
          <h2>My TODOs:</h2>
          <ul className="todo-list" id="todo-list">
            {listContent}
          </ul>
        </section>
      </main>

      <Footer 
        helptext=" Click on the Vite (the build tool) and React (the frontend framework) logos to learn more"
        
      />
    </>
  )
}

export default App