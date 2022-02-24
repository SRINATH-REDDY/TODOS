import axios from 'axios';
const TODOAPIURL='http://localhost:8080/api/v1/todos';

class TodoService
{
    getList()
    {
        return axios.get(TODOAPIURL);

    }
    createTodo(Todo)
    {
        return axios.post(TODOAPIURL, Todo);
    }
    gettodobyId(id)
    {
        return axios.get(TODOAPIURL+"/"+id)
    }
    deleteTodo(id){
        return axios.delete(TODOAPIURL + '/' + id);
    }

}
export default new TodoService()
