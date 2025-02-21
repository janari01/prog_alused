const models = require("../../models");

const createArticle = (req, res) => {
  let name = req.body.name
  let slug = req.body.slug
  let image = req.body.image
  let body = req.body.body

  const newArticle = models.Article.create({
    name: name,
    slug: slug,
    image: image,
    body: body,
    published: new Date().toISOString().slice(0, 19).replace("T", " "),
  })
  .then((article) => {
    console.log(article);
    return res.status(200).json({ message: "New article is added" })
  })
  .catch((err) => {
    return res.status(500).send(err.message)
  })
};



module.exports = {
  createArticle
}