// build your `Resource` model here
const db = require('../../data/dbConfig')

const findById = () => {
    return db('resources')
}

const create = async (time) => {
    const [id] = await db('resources').insert(time)
    return db('resources')
    .where('resource_id', id)
    .first()
}

module.exports = {
    findById,
    create
}