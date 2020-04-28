const express = require("express");
const router = express.Router();
const cloudUploader = require("../configs/cloudinary.config");

const Car = require("../models/car.model");
const User = require("../models/user.model");

// Read documents(list)

router.get("/", (req, res, next) => {
  Car.find()
    .populate("creatorId")
    .then((allCars) => res.render("cars/cars-list", { allCars }))
    .catch((err) => console.log("Ha habido un error!", err));
});

// Read documents (details)

router.get("/:carId/details", (req, res, next) => {
  Car.findById(req.params.carId)
    .populate("creatorId")
    .then((car) => res.render("cars/cars-detail", car))
    .catch((err) => console.log("Ha habido un error!", err));
});

// Create documents

router.get("/create", (req, res, next) => {
  Car.find()
    .then((allCars) => res.render("cars/cars-create", { allCars }))
    .catch((err) => next(new Error(err)));
});

router.post("/create", cloudUploader.single("imgPathForm"), (req, res, next) => {
    const location = {
      type: "Point",
      coordinates: [req.body.latitud, req.body.longitud],
    };

    console.log(req.body, req.file.url)

    User.create({
      brand: req.body.brand,
      model: req.body.model,
      carImagePath: req.file.url,
      manufacturingYear: req.body.manufacturingYear,
      plate: req.body.plate,
      description: req.body.description,
      state: req.body.state,
      kilometres: req.body.kilometres,
      location,
      price: req.body.price,
      adStatus: req.body.adStatus,
    })
      .then(() => res.redirect("/cars"))
      .catch((err) => next(new Error(err)));
  }
);

// Edit documents
router.get("/:car_id/edit", (req, res, next) => {
  Car.findById(req.params.car_id)
    .then((CarToEdit) => res.render("cars/cars-edit", CarToEdit))
    .catch((err) => console.log("Hubo un error", err));
});

router.post("/:car_id/edit", (req, res, next) => {
  const location = {
    type: "Point",
    coordinates: [req.body.latitud, req.body.longitud],
  };
  const { brand, model, manufacturingYear, plate, description } = req.body;

  Car.findByIdAndUpdate(
    req.params.car_id,
    { brand, model, manufacturingYear, plate, description, location },
    { new: true }
  )
    .then((editedCar) => res.redirect(`/cars/${editedCar._id}/details`))
    .catch((err) => console.log("Hubo un error", err));
});

//Delete document
router.post("/:car_id/delete", (req, res, next) => {
  Car.findByIdAndRemove(req.params.car_id)
    .then(res.redirect("/cars"))
    .catch((err) => console.log(`Error  ${err}`));
});

module.exports = router;

// router.post(  "/create",
//   /*cloudUploader.single("pepe"),*/ (req, res, next) => {
//     console.log("hola");

//     const location = {
//       type: "Point",
//       coordinates: [req.body.latitud, req.body.longitud],
//     };

//     const newCar = new Car({
//       brand: req.body.brand,
//       model: req.body.model,
//       carImagePath: req.file.url,
//       manufacturingYear: req.body.manufacturingYear,
//       plate: req.body.plate,
//       description: req.body.description,
//       state: req.body.state,
//       kilometres: req.body.kilometres,
//       location,
//       price: req.body.price,
//       adStatus: req.body.adStatus,
//     });
//     console.log(req.body);

//     newCar.save((err) => {
//       if (err) {
//         next(err);
//       } else {
//         res.redirect("/cars");
//       }
//     });
//   }
// );
