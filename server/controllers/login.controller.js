const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')


// login
exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        // validation
        if(!email || !password) {
            return res.status(401).send({
                success: false,
                message: "Please Provide Email or Password",
            })
        }
        const user = await userModel.findOne({email})
        if(!user) {
            return res.status(200).send({
                success: false,
                message: "Please Provide Email or Password",
            })
        }
        // Password
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(401).send({
                success: false,
                message: "Invalid Username and Password"
            })
        }
        return res.status(200).send({
            success: true,
            message: "Login Successfully",
            user
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Error in Login Callback",
            error
        })
    }
}