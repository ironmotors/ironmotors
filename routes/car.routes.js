const express = require("express")
const router = express.Router()

const Car = require('../models/car.model')
const User = require('../models/user.model')

// Read documents(list)

router.get('/', (req, res, next) => {

    Car.find()
        .populate('creatorId')
        .then(allCars => res.render('cars/cars-list', { allCars }))
        .catch(err => console.log("Ha habido un error!", err))
})

// Read documents (details)

router.get('/:carId/details', (req, res, next) => {

    Car.findById(req.params.carId)
        .populate('creatorId')
        .then(car => res.render('cars/cars-detail', car))
        .catch(err => console.log("Ha habido un error!", err))
})

// Create documents

router.get('/create', (req, res, next) => {
    Car.find()
        .then(allCars => res.render('cars/cars-create', {allCars}))
        .catch(err => next(new Error(err)))
})

router.post('/create', (req, res, next) => {

    const { brand, model, manufacturingYear, plate, description, kilometres, state, price, adStatus } = req.body

    Car.create({ brand, model, manufacturingYear, plate, description, kilometres, state, price, adStatus })
        .then(() => res.redirect('/cars'))
        .catch(err => console.log("Hubo un error", err))
})

// Edit documents
router.get('/:car_id/edit', (req, res, next) => {

    Car.findById(req.params.car_id)
        .then(CarToEdit => res.render('cars/cars-edit', CarToEdit))
        .catch(err => console.log("Hubo un error", err))
})

router.post('/:car_id/edit', (req, res, next) => {

    const { brand, model, manufacturingYear, plate, description } = req.body

    Car.findByIdAndUpdate(req.params.car_id, { brand, model, manufacturingYear, plate, description }, { new: true })
        .then(editedCar => res.redirect(`/cars/${editedCar._id}/details`))
        .catch(err => console.log("Hubo un error", err))
})

//Delete document
router.post('/:car_id/delete', (req, res, next) => {

    Car.findByIdAndRemove(req.params.car_id)
      .then(res.redirect('/cars'))
      .catch(err => console.log(`Error  ${err}`))
})



module.exports = router