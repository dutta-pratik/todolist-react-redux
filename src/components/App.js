import React from 'react';
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/visibleTodoList";
import SideBar from "./SideBar"

function App() {
  return (
    <div className="App">
      <div className="AddTask">
        <AddTodo />
      </div>
      <div className="TaskList">
        <VisibleTodoList />
      </div>
      <div className="SideBar">
        <SideBar/>
      </div>
    </div>
  );
}

export default App;
