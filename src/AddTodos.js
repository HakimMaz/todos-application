import React, { Component } from "react";

class AddTodos extends Component {
    state={
        content:''
    }

    handleChange=(e)=>{
        let content=e.target.value;
        console.log("content", content);
        this.setState({
            content:content
        })

    };
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(" the state",this.state.content);
        this.props.addTodo(this.state); 
        this.setState({
            content:''
        })
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Add new Todo</label>
          <input type="text" onChange={this.handleChange} value={this.state.content}/> 
          
        </form>
      </div>
    );
  }
}
export default AddTodos;
