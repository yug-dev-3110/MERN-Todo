import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db/db.js'
import todoRoute from './routes/todo.route.js'
import cors from 'cors'


dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET','POST','PUT','DELETE'],
}))
app.use('/api', todoRoute)

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on PORT: ${PORT}`)
        })
    })
    .catch((error) => {
        console.log('Internal Sevrer Error', error)
    })