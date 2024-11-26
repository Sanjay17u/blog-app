const express = require('express')
const router = express.Router()

// Home Route
router.get('/', (req, res) => {
    res.status(200).send({
        'message': 'Node Server'
    });
});

module.exports = router