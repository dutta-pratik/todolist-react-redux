import React from 'react';
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/visibleTodoList";
import SideBar from "./SideBar"

function App() {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
      <SideBar/>
    </div>
  );
}

export default App;
