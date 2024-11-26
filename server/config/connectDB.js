const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected : ", mongoose.connection.host)       
    } catch (error) {
        console.log('Mongo Error : ', error)
    }
}

module.exports = connectDB