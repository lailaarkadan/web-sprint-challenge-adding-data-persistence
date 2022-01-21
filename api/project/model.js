// build your `Project` model here
const db = require('../../data/dbConfig')

const findById = async () => {
    const times = await db('projects')

    times.forEach(time => {
        if (time.project_completed === 0) {
            time.project_completed = false
        } else {
            time.project_completed = true
        }
    })

return times
}

const create = async (time) => {
    const [id] = await db("projects").insert(time)
    return db("projects")
    .where("project_id", id)
    .first()
}

module.exports = {
    findById,
    create
}