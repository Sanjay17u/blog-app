const blogModel = require('../models/blogModel')


exports.deleteBlogController = async (req, res) => {
    try {
        const blog = await blogModel.findByIdAndDelete(req.params.id).populate("user")
        if (!blog) {
            return res.status(404).send({
                success: false,
                message: "Blog not found"
            })
        }
        if (blog.user) {
            await blog.user.blogs.pull(blog)
            await blog.user.save()
        }
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