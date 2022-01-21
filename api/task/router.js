// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model.js')

const router = express.Router()


router.get('/', (req, res, next) => {
    Task.getAll()
      .then(tasks => res.status(200).json(tasks))
      .catch(err => next(err))
  })
  
  router.post('/', (req, res, next) => {
    Task.create(req.body)
      .then(task => res.status(201).json(task))
      .catch(err => next(err))
  })

  module.exports = router