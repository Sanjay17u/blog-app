const express = require('express');
const { getAllUsers } = require('../controllers/allUsers.controller');
const { registerController } = require('../controllers/register.controller');
const { loginController } = require('../controllers/login.controller');

const router = express.Router()

// GET All Users || GET
router.get('/all-users', getAllUsers);

// CREATE USERS || POST
router.post('/register', registerController)

// LOGIN || POST
router.post('/login', loginController)

module.exports = router