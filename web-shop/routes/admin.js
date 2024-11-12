const express = require('express')
const router_admin = express.Router()

const admin_controller = require('../controllers/admin')

const admin_model = new admin_controller()

router_admin.get('/admin', (req, res) => admin_model.get_all_products(req, res))

module.exports = router_admin