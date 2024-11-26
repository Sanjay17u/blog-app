const blogModel = require('../models/blogModel')


exports.createBlogController = async (req, res) => {
    try {
        const {title, description, image} = req.body
        // validation
        if(!title || !description || !image) {
            return res.status(400).send({
                success: false,
                message: "Please Provide all Field",
            })
        }
        const newBlog = new blogModel({title, description, image})
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