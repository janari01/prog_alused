const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.URI)

const Article = require('../models/article')(sequelize, Sequelize.DataTypes)

const getAllArticles = (req, res) => {
  const articles = Article.findAll()
  .then(articles => {
    console.log(articles)
    return res.status(200).json({articles})
  })
  .catch(err => {
    return res.status(500).json(err.message)
  })
}

module.exports = {
  getAllArticles
}