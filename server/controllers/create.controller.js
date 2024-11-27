const mongoose = require('mongoose')
const blogModel = require('../models/blogModel')
const userModel = require('../models/userModel')


exports.createBlogController = async (req, res) => {
    try {
        const {title, description, image, user} = req.body
        // validation
        if(!title || !description || !image || !user) {
            return res.status(400).send({
                success: false,
                message: "Please Provide all Field",
            })
        }
        const existingUser = await userModel.findById(user)
        // validation
        if(!existingUser) {
            return res.status(404).send({
                success: false,
                message: 'unable to find user'
            })
        }
        const newBlog = new blogModel({title, description, image, user})
        const session = await mongoose.startSession()
        session.startTransaction()
        await newBlog.save({session})
        existingUser.blogs.push(newBlog)
        await existingUser.save({session})
        await session.commitTransaction();
        await newBlog.save()
        return res.status(201).send({
            success:true,
            message: "Blog Created!",
            newBlog,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Error While Creating Blog",
            error
        })
    }
}