const express = require('express')
const router = express.Router()
const articleController = require('../controllers/article')
const articleAdminController = require('../controllers/admin/article')

router.get('/', articleController.getAllArticles)
router.get('/article/:slug', articleController.getArticleBySlug)
router.get('/author/:id', articleController.getArticlesByAuthor)

router.post('/admin/article/create', articleAdminController.createArticle)

module.exports = router