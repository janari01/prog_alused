const express = require('express')
const router = express.Router()

const shop_controller = require('../controllers/shop')

const shop_model = new shop_controller()

router.get('/', (req, res) => shop_model.get_all_products(req, res))

module.exports = router