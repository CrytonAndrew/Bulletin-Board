import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'

import boardRoutes from './routes/boardRoutes.js'
import userRoutes from './routes/userRoutes.js'

import {notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config();

connectDB()

const app = express();

app.get('/', (req, res) => {
    res.send('API is Running')
})

app.use('/api/boards', boardRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 8000

app.listen(
        port, 
        console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold)
    );