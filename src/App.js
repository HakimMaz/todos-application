import React, { Component } from "react";
import Todos from "./todos";
import AddTodos from './AddTodos';
class App extends Component {
  state = {
    todos: [
      { id: 1, content: "fix Sie bug" },
      { id: 2, content: "join team for meeting harmo" }
    ],
  };
  deleteTodo=(id)=>{
    console.log("id to delete",id);
    const todos=this.state.todos.filter(todo=>todo.id!==id);
    
    this.setState({
      todos:todos
    })

  };
  addTodo=(todo)=>{

    todo.id=Math.random(); 
    let listTodo= [...this.state.todos,todo];
    this.setState({
      todos:listTodo
    })
  }

  render() {
    return (
    <div className="todo-app container">
      <h1 className="center blue-text"> Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddTodos addTodo={this.addTodo}/>

    </div>
    )
  }
}

export default App;
