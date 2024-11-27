const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')



// create user registration user
exports.registerController = async (req, res) => {
    try {
        const {username, email, password} = req.body
        // validation
        if(!username || !email || !password) {
            return res.status(400).send({
                success: false,
                message: 'Please Fill all Fields'
            })
        }
        // existing user
        const existingUser = await userModel.findOne({email})
        if(existingUser) {
            return res.status(401).send({
                success: false,
                message: 'User already exists'
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // save new user
        const user = new userModel({username,email,password:hashedPassword})
        await user.save()
        return res.status(201).send({
            success: true,
            message: 'New User Created',
            user
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            'message': 'Error in Register Callback',
            'success': false,
             error
        })
    }
}