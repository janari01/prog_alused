const authorDBModel = require('../models/author')
const articleDBModel = require('../models/article')

const authorModel = new authorDBModel()
const articleModel = new articleDBModel()

class authorController {
    constructor() {
        const authors = []
    }

    async getAuthorById(req, res) {
        const author = await authorModel.findById(parseInt(req.params.num))
        const articles = await articleModel.findMany(author.id) // accepts one parameter
        author['articles'] = articles
        res.status(200).json({author: author})
    }
}

module.exports = authorController
