const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDB = require('./config/connectDB');


// env config
dotenv.config();


// mongoDB connection
connectDB()

// rest object
const app = express()

// middlewares
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

// Routes
const apiRoutes = require('./routes/apiRoutes');
const blogRoutes = require('./routes/blogRouts')
app.use('/api/v1/user', apiRoutes)
app.use('/api/v1/blog', blogRoutes)

// Start Server
const PORT = process.env.PORT
// Listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

