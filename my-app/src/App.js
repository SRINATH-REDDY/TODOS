//import logo from './logo.svg';
import ListTodos from './component/ListTodos';
import TodoService from './Service/TodoService';
import './App.css';
import CreateTododsComponent from './component/CreateTodosComponent';
import { BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
  
      <div className="container">
        <Router>
           <Switch>
             <Route  path ="/"  exact component={ListTodos}></Route>
             <Route  path="/todos"  component={ListTodos}></Route>
             <Route path="/add-todos" component={CreateTododsComponent}></Route>
          

             
           </Switch>
           </Router>   
              </div>
     
    </div>
  );
}

export default App;
