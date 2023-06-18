const express = require('express')
const authController = require('../controller/authController')
const auth = require('../middlewares/auth')
const blogController = require('../controller/blogController')
const commentController = require('../controller/commentController')

const router = express.Router()

router.get('/test',(req, res) => res.json({msg:'working?'}))

//auth
router.post('/register', authController.register)
router.post('/login', authController.login)
router.post('/logout', auth, authController.logout)
router.get('/refresh', authController.refresh)
//blog
router.post('/blog', auth, blogController.create)
router.get('/blog/all',auth,blogController.getall)
router.get('/blog/:id', auth, blogController.getById)
router.put('/blog',auth, blogController.update)
router.delete('/blog/:id', auth, blogController.delete)
//comment
router.post('/comment', auth,commentController.create)
router.get('/comment/:id', auth, commentController.getById)
module.exports = router