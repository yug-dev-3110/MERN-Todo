import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
})

export const fetchTodosAPI = () => api.get("/todos")
export const addTodoAPI = (data) => api.post('/todos', data)
// accept a data object and an id for clarity
export const updateTodoAPI = (data, id) => api.put(`/todos/${id}`, data)
export const deleteTodoAPI = (id) => api.delete(`/todos/${id}`)