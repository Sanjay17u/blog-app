const blogModel = require('../models/blogModel')
const userModel = require('../models/userModel')


exports.userBlogController = async (req, res) => {
    try {
        const userBlog = await userModel.findById(req.params.id).populate("blogs")
        if(!userBlog) {
            return res.status(404).send({
                success: false,
                message: "Blog not found with this id"
            })
        }
        return res.status(200).send({
            success: true,
            message: 'userBlog',
            userBlog
        })
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            success: false,
            message: "Error While Getting User Blog",
            error
        })
    }
}