const shop_model = require('../models/shop')
const shop_model_var = new shop_model()

// so basically this file is for using functions that are in SHOP_MODEL CLASS (models/shop.js)

class shop_controller {
    constructor() {

    }
    async update_admin(req, res) {
        const {title, imageUrl, price, description, id} = req.body
        const update_product = await shop_model_var.updateProduct([title, price, description, imageUrl, id])
        res.status(200).redirect('/admin-products')
    }
    async delete_admin(req, res) {
        const id = req.query.id
        const delete_product = await shop_model_var.deleteProduct([id])
        res.status(200).redirect('/admin-products')
    }

    async render_admin(req, res) {
        const products = await shop_model_var.findAll()
        res.render('admin', { products: products })
    }

    async get_all_products(req, res) {
        const products = await shop_model_var.findAll()
        res.render('index', { products: products })
    }

    async render_add_product(req, res) {
        res.render('add_product')
    }

    async add_product(req, res) {
        const {title, price, description, imageUrl} = req.body
        const add_product = await shop_model_var.addProduct([title, price, description, imageUrl])
        res.status(200).redirect('/add-product')
    }

    async render_cart(req, res) {
        res.render('cart')
    }
}

module.exports = shop_controller