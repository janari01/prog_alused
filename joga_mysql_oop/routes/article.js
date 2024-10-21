const express = require('express')
const router = express.Router()
const articleControllerClass = require('../controllers/article')

const articleController = new articleControllerClass()

router.get('/', (req, res) => articleController.getAllArticles(req, res))
// router.get('/article/:slug', articleController.getArticleBySlug)
// router.get('/author/:num', articleController.getAuthorArticles)

module.exports = router