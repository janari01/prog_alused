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
        // console.log(author)
        const articles = await articleModel.findMany('author_id', author.id)
        author['articles'] = articles
        res.status(200).json({author: author})
    }
}

module.exports = authorController
