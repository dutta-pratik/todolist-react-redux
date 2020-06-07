import React from 'react';
import AddTodo from "../containers/AddTodo";
import visibleTodoList from "../containers/visibleTodoList";


function App() {
  return (
    <div className="App">
      <AddTodo />
      <visibleTodoList></visibleTodoList>
    </div>
  );
}

export default App;
