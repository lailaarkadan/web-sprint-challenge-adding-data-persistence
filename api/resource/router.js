// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model.js')

const router = express.Router()

router.get('/', (req, res, next) => {
  Resource.findById()
    .then(resources => res.status(200).json(resources))
    .catch(err => next(err))
})

router.post('/', (req, res, next) => {
    Resource.create(req.body)
      .then(resource => res.status(201).json(resource))
      .catch(err => next(err))
  })


  
  module.exports = router
