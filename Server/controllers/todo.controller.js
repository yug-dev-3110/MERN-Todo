import Todo from "../models/todo.model.js"

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.status(200).json(todos)
    } catch (error) {
        console.log('error in fetching todos', error)
        res.status(500).json({ message: "internal server error", error })
    }
}

export const addTodo = async (req, res) => {
    try {
        const { title, description } = req.body
        if (!title || !description) {
            return res.status(400).json({ message: 'title and description are required' })
        }

        const newTodo = new Todo({ title, description })
        await newTodo.save()

        // return the created todo so the client can update state
        res.status(201).json(newTodo)
    } catch (error) {
        console.log('error in creating todos', error)
        res.status(500).json({ message: "internal server error", error })
    }
}

export const updateTodo = async (req, res) => {
    try {
        const { title, description } = req.body

        if (!title || !description) {
            return res.status(400).json({ message: "all fields are required !" })
        }

        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, { title, description }, { new: true })

        if (!updatedTodo) {
            return res.status(404).json({ message: "todo not found !" })
        }

        res.status(200).json(updatedTodo)

    } catch (error) {
        console.log('error in updating todos', error)
        res.status(500).json({ message: "internal server error", error })
    }
}

export const deleteTodo = async (req,res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id)

        if(!deletedTodo){
            return res.status(404).json({message: "Todo not found !"})
        }

        res.status(200).json({message: "Todo deleted successfully !"})

    } catch (error) {
        console.log('error in deleting todos', error)
        res.status(500).json({ message: "internal server error", error })
    }
}