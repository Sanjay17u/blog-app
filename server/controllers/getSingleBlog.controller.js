const blogModel = require('../models/blogModel')


exports.getBlogByIdController = async (req, res) => {
    try {
        const {id} =  req.params
        const blogs = await blogModel.findById(id)
        if(!blogs) {
            return res.status(404).send({
                success: false,
                message: "Blog Not Found With This ID"
            })
        }
        return res.status(200).send({
            success: true,
            message: "Fetched Single Blog",
            blogs
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Error in Getting Single Blog",
            error
        })
    }
}