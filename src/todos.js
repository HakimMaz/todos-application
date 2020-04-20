import React from 'react';

const Todos =({todos,deleteTodo}) =>{

    const handelClickTodo=(id)=>{
        
        deleteTodo(id);


    };
    const todosList=todos.length? todos.map(todo=>{
       return(
         <div className="collection-item" key={todo.id}>
           <span onClick={()=>handelClickTodo(todo.id)}>{todo.content}</span>
           
           </div>
       )
    }):(<p className="center"> No todos to Display</p>)
    return(
    <div className="todos collection">
        {todosList}
    </div>
    )
}
export default Todos