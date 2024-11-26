const express = require('express');
const { getAllUsers, registerController, loginController } = require('../controllers/userController');
const router = express.Router()

// GET All Users || GET
router.get('/all-users', getAllUsers);

// CREATE USERS || POST
router.post('/register', registerController)

// LOGIN || POST
router.post('/login', loginController)

module.exports = router