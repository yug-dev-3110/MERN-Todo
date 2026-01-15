import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addTodoAPI, deleteTodoAPI, fetchTodosAPI, updateTodoAPI } from "./todoAPI";


export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    const res = await fetchTodosAPI()
    return res.data
})

export const addTodo = createAsyncThunk('todos/addTodo', async (data) => {
    // data should be an object: { title, description }
    const res = await addTodoAPI(data)
    return res.data
})

export const updateTodo = createAsyncThunk('todos/updateTodo', async ({title, description, id}) => {
    const res = await updateTodoAPI({title, description}, id)
    return res.data
})

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
    await deleteTodoAPI(id)
    return id
})

const todoSlice = createSlice({
    name:"todos",
    initialState: {
        items: [],
        status: "idle" // idle, loading, succeeded, failed
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.items = action.payload
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                // server returns the created todo
                state.items.push(action.payload)
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                const index = state.items.findIndex(
                    (todo) => todo._id === action.payload._id
                )
                if (index !== -1){
                    state.items[index] = action.payload
                }
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.items = state.items.filter((t) => t._id !== action.payload)
            })
    }
})

export default todoSlice.reducer