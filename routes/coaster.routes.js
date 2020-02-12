const express = require('express')
const router = express.Router()
const Coaster = require('../models/coaster.model')
const Park = require('../models/park.model')


// Aquí los endpoints
router.get("/", (req, res) => {
    Coaster.find()
    .then(coasterFound => {
        res.render("coasters/coasters-index", { coasterFound });
      })
      .catch(() => {
        next();
      });
});


router.get("/:id", (req, res, next) => {
    Coaster.find({ _id: req.params.id })
      .then(coasterFound => {
        
        res.render("coasters/coaster-details", coasterFound[0]);
      })
      .catch(() => {
        next();
      });
  });






module.exports = router