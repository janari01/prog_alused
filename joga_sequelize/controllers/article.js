const models = require('../models')

const getAllArticles = (req, res) => {
  models.Article.findAll()
  .then(articles => {
    console.log(articles)
    return res.status(200).json({articles})
  })
  .catch(err => {
    return res.status(500).json(err.message)
  })
}

const getArticleBySlug = (req, res) => {
  models.Article.findOne({
    where: {
      slug: req.params.slug
    },
    include: [
      {
        model: models.Author,
      },
      {
        model: models.Tag,
        through:{
            model: models.ArticleTag
        }
      }
  ],
  })
  .then(article => {
    console.log(article)
    return res.status(200).json({article})
  })
  .catch(err => {
    return res.status(500).json(err.message)
  })
}

const getArticlesByAuthor = (req, res) => {
  models.Article.findAll({
    where: {
      author_id: req.params.author_id
    }
  })
  .then(articles => {
    console.log(articles)
    return res.status(200).json({articles})
  })
  .catch(err => {
    return res.status(500).send(err.message)
  })
}

module.exports = {
  getAllArticles,
  getArticleBySlug,
  getArticlesByAuthor
}