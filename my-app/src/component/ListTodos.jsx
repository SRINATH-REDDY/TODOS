import React, { Component } from 'react';
import TodoService from '../Service/TodoService';

class ListTodos extends Component 
{
    constructor(props)
  {
    super(props)
    this.state=
    {
      list : 
      []
      
      
    }
     this.addTodo=this.addTodo.bind(this);
     
     this.deleteTodo=this.deleteTodo.bind(this);

  }
  deleteTodo(id){
    TodoService.deleteTodo(id).then( res => {
        this.setState({list: this.state.list.filter(todo => todo.id !== id)});
    });
}
  
  componentDidMount()
    {
        TodoService.getList().then((res)=>{
            this.setState({
                list:res.data});
        });
    }
    
    addTodo()
    {
        this.props.history.push('/add-todos');

        
    }
  
  render()
  {
    return (
    <div>
      <h1>List Todos</h1>
      <div>
        <button className='btn btn-primary' onClick={this.addTodo}>Add Todo</button>
          </div>
        <table  class='table'>
          <thead>
            <tr>
              
              <th>description</th>
              <th>Is Completed?</th>
              <th>Target Date</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>{
          this.state.list.map(
            todos=>
            <tr>
             
              
              <td>{todos.task}</td>
              <td>{todos.isDone.toString()}</td>
              <td>{todos.targetDate.toString()}</td>
              
              <td>
                <button onClick={()=>this.deleteTodo(todos.id)} className='button button-info'>Delete</button>
              </td>
              
            </tr>
               )}
          </tbody>
        </table>
    
    
    </div>
    );
}
}
export default ListTodos;
