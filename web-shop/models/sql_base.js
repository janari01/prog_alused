const con = require('../utils/db')

class sql_base {
    constructor(table_name) {
        this.table_name = table_name
    }

    executeQuery(query, params) {
        return new Promise((resolve, reject) => {
            con.execute(query, params)
            .then(([results]) => resolve(results))
            .catch(([err]) => reject(err))
        })
    }

    // main SQL statments and functions here
    async findAll() {
        const query = `SELECT * FROM ${this.table_name}`
        const result = await this.executeQuery(query)
        return result
    }

    async addProduct(data) {
        const query = `INSERT INTO ${this.table_name} (title, price, description, imageUrl) VALUES (?, ?, ?, ?)`
        const result = await this.executeQuery(query, data)
        return result
    }

    async updateProduct(data) {
        const id = data[data.length - 1]
        data.splice(data.length - 1, 1)
        const query = `UPDATE ${this.table_name} SET title=?, price=?, description=?, imageUrl=? WHERE id=${id}`
        const result = await this.executeQuery(query, data)
        return result
    }

    async deleteProduct(data) {
        const query = `DELETE FROM ${this.table_name} WHERE id=${data[0]}`
        const result = await this.executeQuery(query)
        return result
    }
}

module.exports = sql_base