const BaseSQLModel = require('./base')

class AuthorModel extends BaseSQLModel {
    constructor() {
        super('author') // table name
    }

    async findById(id) {
        const authors = await super.findById(id)
        return authors
    }
    

    // async findMany(where, value) {
    //     const author = await super.findMany('slug', slug)
    //     return author
    // }
}

module.exports = AuthorModel