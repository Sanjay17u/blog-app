const mongoose = require('mongoose')


const blogSchema = new mongoose.Schema({
    image:{
        type: String,
        required: [true, "Image is required"],
    },

    title:{
        type: String,
        required: [true, "Title is required"],
    },
    
    description:{
        type: String,
        required: [true, "Discription is required"],
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required: [true, "user id is required"]
    }

}, {timestamps: true})


const blogModel = mongoose.model('Blog', blogSchema)

module.exports = blogModel