const express = require('express')
const router = express.Router()
const Coaster = require('../models/coaster.model')
const Park = require('../models/park.model')

// Aquí los endpoints
router.get("/", (req, res) => res.render('parks/new-park'));





module.exports = router