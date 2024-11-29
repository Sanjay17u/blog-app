const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDB = require('./config/connectDB')
const cookieParser = require('cookie-parser')
const path = require('path')

// env config
dotenv.config()

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
app.use(cookieParser())
app.use(morgan('dev'))

// Routes
const apiRoutes = require('./routes/apiRoutes')
const blogRoutes = require('./routes/blogRouts')
app.use('/api/v1/user', apiRoutes)
app.use('/api/v1/blog', blogRoutes)

// Adjust the static file path
const clientPath = path.resolve(__dirname, '..', 'client', 'dist')  // Going one level up to the root folder

app.use(express.static(clientPath))

app.get('*', (_, res) => {
    res.sendFile(path.resolve(clientPath, 'index.html'))
})

// Start Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
