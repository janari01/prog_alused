const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.URI)

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
    include: [{
      model: models.Author
    }]
  })
  .then(article => {
    console.log(article)
    return res.status(200).json({article})
  })
  .catch(err => {
    return res.status(500).json(err.message)
  })
}

module.exports = {
  getAllArticles,
  getArticleBySlug
}