const connection = require('../utils/db')

function getAllArticles(req, res) {
    let query = "SELECT * FROM article"
    let articles = []
    connection.query(query, (err, result) => {
        if (err) { throw err }
        articles = result
        res.render('index', {
            articles: articles
        })
    })
}

function getArticleBySlug(req, res) {
    let query = `SELECT *,
                    article.name as article_name,
                    author.name as author_name
                    FROM article 
                    INNER JOIN author
                    ON author.id = article.author_id WHERE slug="${req.params.slug}"`
    let article
    connection.query(query, (err, result) => {
        if (err) { throw err }
        article = result
        res.render('article', {
            article: article
        })
    })
}

function getAuthorArticles(req, res) {
    let id = req.params.num
    let article
    let author
    connection.query(`SELECT * FROM article WHERE author_id="${id}"`, (err, result) => {
        if (err) { throw err }
        article = result
        connection.query(`SELECT * FROM author WHERE id="${id}"`, (err, result) => {
            author = result
            res.render('author', {
                articles: article,
                author: author[0]
            })
        })
    })
}

module.exports = {
    getAllArticles,
    getArticleBySlug,
    getAuthorArticles
}