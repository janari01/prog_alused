const sql_base = require('./sql_base')

class admin_model extends sql_base {
    constructor() {
        super('web_shop') // the table name where we get informaton, inhere. data from sql_base.js
    }

    async findAll() {
        const productsAll = await super.findAll()
        return productsAll
    }

}

module.exports = admin_model