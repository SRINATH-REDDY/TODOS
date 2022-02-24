import React, { Component } from 'react';
import TodoService from '../Service/TodoService';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//import React, { Component } from 'react';



class UpdateTodosComponent extends Component { 
    constructor(props)
  {
    super(props);
    this.state=
    {
      id:this.props.match.params.id,
      task:'',
      isDone:'',
      targetDate:''
    }

    this.changeTaskHandler=this.changeTaskHandler.bind(this);
        this.changeIsDoneHandler=this.changeIsDoneHandler.bind(this);
       // this.changeIdHandler=this.changeIdHandler.bind(this);

        this.changeTargetHandler=this.changeTargetHandler.bind(this);
        this.UpdateTodo=this.UpdateTodo.bind(this);
  }
  componentDidMount()
  {
      TodoService.gettodobyId
      (this.state.id).then ((res)=>
      {
          let todo=res.data;
          this.setState=
          {
            task:todo.task,
            isDone:todo.isDone,
            targetDate:todo.targetDate
              
          }

      });
  }
  UpdateTodo = (e)=>
  {
     // e.preventDefault();
      let todo= {id:this.state.id,task : this.state.task,isDone: this.state.isDone,targetDate: this.state.targetDate };
      console.log('listtodo=>'+JSON.stringify(todo));
      
      
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
                    <h3 className='text-center'>Update Todo</h3>
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
                        <button className='btn btn-success' onClick={this.UpdateTodo}>Update</button>
                        <button className='btn btn-danger' onClick={this.cancel.bind(this)}>Cancel</button>

                        </form>

                    </div>
              </div>

            </div>
          

    );
  }
}

export default UpdateTodosComponent;