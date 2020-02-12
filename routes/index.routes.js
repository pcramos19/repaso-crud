const express = require('express')
const router = express.Router()
const Park = require('../models/park.model')
const Coaster = require('../models/coaster.model')

router.get('/', (req, res) => res.render('index'))

//Esta ruta en park.routes no me la pilla y no entiendo
router.post('/create-park', (req, res, next) => {
    Park.create({
      name: req.body.name,
      description: req.body.description
      })
      .then(() => {
        res.redirect("/");
    })
      .catch(() => {
        next();
      })
  });

// Opcion 2 de Crear
//   router.post('/create-park', (req, res, next) => {
    
//     const newPark = new Park({
//       name: req.body.name,
//       description: req.body.description,
//       active: true
//       });
//     newPark.save((error) => {
//       if (error) { 
//         next(error); 
//       } else { 
//         res.redirect('/');
//       }
//       })
//   });


//Estas rutas en coaster.routes no me la pilla y no entiendo



router.get("/new-coaster", (req, res) => {
    res.render("coasters/new-coaster")
});

router.post('/create-coaster', (req, res, next) => {
    Coaster.create({
      name: req.body.name,
      description: req.body.description,
      inversions: req.body.inversions,
      length: req.body.length,
    //   park: req.body.park.id
      })
      .then(() => {
        res.redirect("/");
    })
      .catch(() => {
        next();
      })
  });

  router.post('/:_id/delete', (req, res, next) => {
	Coaster.remove({ _id: req.params._id }, function(error, place) {
		if (error) {
			next(error);
		} else {
			res.redirect('/');
		}
	});
});
module.exports = router