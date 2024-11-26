const blogModel = require('../models/blogModel')


exports.getAllBlogController = async (req, res) => {
    try {
        const blogs = await blogModel.find({})
        if(!blogs) {
            return res.this.state(200).send({
                success: false,
                message: "No Blogs Found",
                blogs,
            })
        }
        return res.status(200).send({
            BlogCount: blogs.length,
            success: true,
            message: "All Blogs Lists",
            blogs,
        })
    } catch (error) {
        console.log(error)
        return res.send(500).send({
            success: false,
            message: "Error While Getting Blogs",
            error
        })
    }
}