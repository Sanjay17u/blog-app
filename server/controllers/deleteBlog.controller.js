const blogModel = require('../models/blogModel')


exports.deleteBlogController = async (req, res) => {
    try {
        await blogModel.findByIdAndDelete(req.params.id)
        return res.status(200).send({
            success: true,
            message: "Blog Deleted..!"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Error While Delete Blog",
            error
        })
    }
}