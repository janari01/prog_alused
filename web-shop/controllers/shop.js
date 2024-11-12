const shop_model = require('../models/shop')
const shop_model_var = new shop_model()

// so basically this file is for using functions that are in SHOP_MODEL CLASS (models/shop.js)

class shop_controller {
    constructor() {

    }

    async get_all_products(req, res) {
        const products = await shop_model_var.findAll()
        res.render('index', { products: products })
    }
}

module.exports = shop_controller