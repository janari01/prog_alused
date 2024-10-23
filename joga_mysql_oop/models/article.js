const BaseSQLModel = require('./base')

class ArticleModel extends BaseSQLModel {
    constructor() {
        super('article')
    }

    async findAll() {
        const articles = await super.findAll()
        return articles
    }

    async findOne(slug) {
        const article = await super.findOne('slug', slug)
        return article
    }

    async findMany(author) {
        const articles = await super.findMany('author_id', author) // author = author.id (already specified)
        return articles
    }

    async create(article) {
        const createdArticleId = await super.create(article)
        return createdArticleId
    }
}

module.exports = ArticleModel