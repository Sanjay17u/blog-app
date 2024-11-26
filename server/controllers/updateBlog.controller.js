const blogModel = require("../models/blogModel")


exports.updateBlogController = async (req, res) => {
    try {
        const {id} = req.params
        const {title, description, image} = req.body
        const blogs = await blogModel.findByIdAndUpdate(id,{ ...req.body }, { new: true })
        return res.status(200).send({
            success: true,
            message: "Blog is Updated!",
            blogs,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Error While Updating Blog",
            error
        })
    }
}