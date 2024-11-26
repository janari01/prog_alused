const express = require('express')
const router = express.Router()

const shop_controller = require('../controllers/shop')

const shop_model = new shop_controller()

router.post('/admin-products', (req, res) => shop_model.update_admin(req, res))
router.get('/admin-products/del', (req, res) => shop_model.delete_admin(req, res))
router.get('/admin-products', (req, res) => shop_model.render_admin(req, res))
router.get('/shop', (req, res) => shop_model.get_all_products(req, res))
router.get('/add-product', (req, res) => shop_model.render_add_product(req, res))
router.post('/add-product', (req, res) => shop_model.add_product(req, res))
router.get('/cart', (req, res) => shop_model.render_cart(req, res))

module.exports = router