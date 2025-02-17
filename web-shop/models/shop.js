const sql_base = require('./sql_base')

class shop_model extends sql_base {
    constructor() {
        super('web_shop') // the table name where we get informaton, inhere. data from sql_base.js
    }

    async findAll() {
        const productsAll = await super.findAll()
        return productsAll
    }

    async addProduct(data) {
        const add_product = await super.addProduct(data)
        return add_product
    }

    async updateProduct(data) {
        const update_product = await super.updateProduct(data)
        return update_product
    }

    async deleteProduct(data) {
        const delete_product = await super.deleteProduct(data)
        return delete_product
    }


}

module.exports = shop_model