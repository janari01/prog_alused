const admin_model = require('../models/admin')
const admin_model_var = new admin_model()

// so basically this file is for using functions that are in ADMIN_MODEL CLASS (models/admin.js)

class admin_controller {
    constructor() {
 
    }

    async get_all_products(req, res) {
        const products = await admin_model_var.findAll()
        res.render('index', { products: products })
    }
}

module.exports = admin_controller