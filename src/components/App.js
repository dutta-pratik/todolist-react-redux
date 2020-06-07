import React from 'react';
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/visibleTodoList";


function App() {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
    </div>
  );
}

export default App;
