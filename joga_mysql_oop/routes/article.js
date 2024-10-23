const express = require('express')
const router = express.Router()
const articleControllerClass = require('../controllers/article')
const authorControllerClass = require('../controllers/author')

const articleController = new articleControllerClass()
const authorController = new authorControllerClass()

router.get('/', (req, res) => articleController.getAllArticles(req, res))
router.get('/article/:slug', (req, res) => articleController.getArticleBySlug(req, res))
router.get('/author/:num', (req, res) => authorController.getAuthorById(req, res))
router.post('/article/create', (req, res) => articleController.createNewArticle(req, res))
router.post('/article/edit/:id', (req, res) => articleController.updateArticle(req, res))
router.delete('/article/delete/:id', (req, res) => articleController.deleteArticle(req, res))


module.exports = router