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

const updateArticle = (req, res) => {
  if (req.method == "POST") {
    let name = req.body.name;
    let slug = req.body.slug;
    let image = req.body.image;
    let body = req.body.body;
    let published = req.body.publised;

    models.Article.update(
      {
        name: name,
        slug: slug,
        image: image,
        body: body,
        published: new Date().toISOString().slice(0, 19).replace("T", " "),
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then((article) => {
      console.log(article);
      return res.status(200).json({ message: "Updated article" })
    })
    .catch((err) => {
      return res.status(500).send(err.message)
    })
  } else if (req.method == "GET") {
    models.Article.findOne({
      where: {
        id: req.params.id,
      },
    })
    .then((article) => {
      console.log(article);
      return res.status(200).json({article})
    })
    .catch((error) => {
      return res.status(500).send(error.message)
    })
  }
};

module.exports = {
  createArticle,
  updateArticle
}