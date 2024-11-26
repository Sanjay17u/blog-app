const userModel = require('../models/userModel')


// get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({})
        return res.status(200).send({
            usersCount: users.length,
            success: true,
            message: "All Users Data",
            users
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            seccess: false,
            message: 'Error in get all Users.',
            error
        })
    }
}