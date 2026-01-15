import express from "express";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todo.controller.js";

const router = express.Router()

router.get('/todos', getTodos)
router.post('/todos', addTodo)
router.put('/todos/:id', updateTodo)
router.delete('/todos/:id', deleteTodo)

export default router