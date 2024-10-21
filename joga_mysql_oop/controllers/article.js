const articleDBModel = require('../models/article')
const articleModel = new articleDBModel()

class articleController {
    constructor() {
        const articles = []
    }

    async getAllArticles(req, res) {
        const articles = await articleModel.findAll()
        res.status(200).json({articles: articles})
    }
}

module.exports = articleController
