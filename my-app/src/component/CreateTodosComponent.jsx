import React, { Component } from 'react';
import TodoService from '../Service/TodoService';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class CreateTododsComponent extends Component {
  constructor(props)
  {
    super(props);
    this.state=
    {
      id:'',
      task:'',
      isDone:'',
      targetDate:''
    }

    this.changeTaskHandler=this.changeTaskHandler.bind(this);
        this.changeIsDoneHandler=this.changeIsDoneHandler.bind(this);

        this.changeTargetHandler=this.changeTargetHandler.bind(this);
        this.saveTodo=this.saveTodo.bind(this);
  }
  saveTodo = (e)=>
  {
      e.preventDefault();
      let listtodo= {id:this.state.id,task : this.state.task,isDone: this.state.isDone,targetDate: this.state.targetDate };
      console.log('listtodo=>'+JSON.stringify(listtodo));
      
      TodoService.createTodo(listtodo).then
        (res=>
          {
            this.props.history.push('/todos');
             console.log("success")
          }
          ).catch((error) => {
            console.log("Error:", error);
          });
          
  }

cancel()
{
this.props.history.push('/todos');
}

changeTaskHandler= (event)=>
{
this.setState({task : event.target.value});
}

changeIsDoneHandler= (event)=>
{
this.setState({isDone : event.target.value});
}
changeTargetHandler= (event)=>
{
this.setState({targetDate : event.target.value});
}

  render() {
    return (
      <div className='container'>
             <div className="row"> 
                <div className="card col-md6 offset-md-3 offset-md-3">
                    <h3 className='text-center'>Add Todo</h3>
                    </div>
                    <div className='card-body'>
                        <form>
                        
                          
                        <div className='form-group'>
                        <label>Task: </label>
                        <input  name='Task' value={this.state.task} 
                        onChange={this.changeTaskHandler}></input>
                        </div>
                        <div className='form-group'>
                        <label>Is Done : </label>
                        <input name='isDone' value={this.state.isDone} 
                          onChange={this.changeIsDoneHandler}></input>
                        </div>
                        <div className='form-group'>
                        <label>Target Date : </label>
                        <input name='targetDate' value={this.state.targetDate} 
                        onChange={this.changeTargetHandler}></input>
                        </div>
                        <button className='btn btn-success' onClick={this.saveTodo}>Save</button>
                        <button className='btn btn-danger' onClick={this.cancel.bind(this)}>Cancel</button>

                        </form>

                    </div>
              </div>

            </div>
          

    );
  }
}

export default CreateTododsComponent;
