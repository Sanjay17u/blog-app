const express = require('express')
const { getAllBlogController } = require('../controllers/allBlog.controller')
const { createBlogController } = require('../controllers/create.controller')
const { updateBlogController } = require('../controllers/updateBlog.controller')
const { getBlogByIdController } = require('../controllers/getSingleBlog.controller')

// router object
const router = express.Router()

// routes

//GET || All Blogs 
router.get('/all-blog', getAllBlogController)

// POST || create blog
router.post('/create-blog', createBlogController)

// PUT || update blog
router.put('/update-blog/:id', updateBlogController)

// GET || Single Blog Details
router.get('/get-blog/:id', getBlogByIdController)

// DELETE || delete
// router.delete('/delete-blog/:id', deleteBlogController)

module.exports = router 