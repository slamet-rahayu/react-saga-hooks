import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  GET_TODOS_REQUESTED,
  DELETE_TODO_REQUESTED,
  CREATE_TODO_REQUESTED
 } from '../../redux/constant/todo';

export default function ReduxSagaSimpleFetch() {
  const dispatch = useDispatch();
  const getTodos = () => dispatch({type: GET_TODOS_REQUESTED});
  const deleteTodo = (id) => dispatch({type: DELETE_TODO_REQUESTED, payload: id});
  const createTodo = (title) => dispatch({type: CREATE_TODO_REQUESTED, payload: title});
  const { loading, todos } = useSelector(state => state.todos);
  
  React.useEffect(() => {
    getTodos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(e.target[0].value)
  }

  return (
    <div>
      <h1>Redux Saga Simple Todo Json Typicode</h1>
      <div>
        <h2>Todos</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="todo" />
          <button type="submit">Add</button>
        </form>
        <ul>
          {loading && <h3>Loading...</h3>}
          {todos.map((v) => {
            const deleteT = () => deleteTodo(v.id);
            return (
              <li key={v.title}>{v.title}<button type="button" onClick={deleteT}>x</button></li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}