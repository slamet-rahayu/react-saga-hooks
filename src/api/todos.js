import defautltAxios from 'axios';

const axios = defautltAxios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: { 'Content-type': 'application/json' }
});

export const getAllTodos = async () => {
  try {
    const todos = await axios.get('todos?_limit=5');
    return todos.data;
  } catch (error) {
    console.error(error)
  }
}

export const createNewTodo = async (title) => {
  try {
    const todo = await axios.post('todos', {
      title
    });
    return todo.data
  } catch (error) {
    console.error(error)
  }
}

export const deleteExistedTodo = async (id) => {
  try {
    await axios.delete(`todos/${id}`);
    return id;
  } catch (error) {
    console.error(error)
  }
}
