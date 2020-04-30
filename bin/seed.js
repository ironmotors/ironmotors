const mongoose = require("mongoose");
const Car = require("../models/car.model");
const User = require("../models/user.model")

const dbtitle = 'Social_Motors'
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useUnifiedTopology: true, useNewUrlParser: true })

User.collection.drop()
Car.collection.drop()

const cars = [
  {
    brand: "Ford",
    model: "Mercury",
    manufacturingYear: 1950,
    plate: '2363GTR',
    description: ' Dick Dean who built this timeless classic custom Merc. 3 years ago the owner of this Merc began a complete restoration by first taking it down to bare metal and replacing every nut and bolt including a frame-off build using a 1972 Olds Cutlass frame. The stock engine was completely rebuilt and now produces just over 325 hp with a 200 4R transmission and Ididit steering column. The stock Olds suspension was modified to accept a full air-ride set up so she sits so low and lean. The body was customized as only Dick Dean could do, and this masterpiece has a 5 inch chop and was smoothed, shaved, and frenched. Everything on this Merc is remote and includes power steering, power brakes, A/C (needs to be finished) and an outrageous sound system. This is one sic Merc thatâ€™s a whole lotta cool for only $65,000.',
    carImagePath: 'https://images1.americanlisted.com/nlarge/1950-mercury-custom-americanlisted_28154009.jpg',
    creatorId: {
        username: 'Alejandro',
        profilePicPath: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
        phoneNumber: 643434783,
        role: 'ADMIN'
      },
    ownerName: "Social Motors",
    state: "Usado",
    kilometres: 155000,
    location: { coordinates: [40.409726, -3.709717]
    },
    price: 65000,
    adStatus: "En venta",
  },
  {
    brand: "Buick",
    model: "Riviera",
    manufacturingYear: 1965,
    plate: 'M2363TR',
    description: 'Gran coche perfecto para ciudad',
    carImagePath: 'https://static.cargurus.com/images/site/2008/04/11/18/43/1965_buick_riviera-pic-11082-640x480.jpeg',
    creatorId: {
        username: 'Alejandro',
        profilePicPath: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
        phoneNumber: 643434783,
        role: 'ADMIN'
      },
    ownerName: "Social Motors",
    state: "Usado",
    kilometres: 95000,
    location: { coordinates: [40.429715, -3.709706]
    },
    price: 19000,
    adStatus: "En venta",
  },
  {
    brand: "Ford",
    model: "Mustang",
    manufacturingYear: 1965,
    plate: '2363GTR',
    description: 'Gran coche perfecto para ciudad',
    carImagePath: 'https://barrettjacksoncdn.azureedge.net/staging/carlist/items/Fullsize/Cars/222154/222154_Front_3-4_Web.jpg',
    creatorId: {
        username: 'Alejandro',
        profilePicPath: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
        phoneNumber: 643434783,
        role: 'ADMIN'
      },
    ownerName: "Social Motors",
    state: "Usado",
    kilometres: 155000,
    location: { coordinates: [40.419724, -3.709715]
    },
    price: 10000,
    adStatus: "En venta",
  },
  {
    brand: "Ford",
    model: "Mustang boss 429",
    manufacturingYear: 1967,
    plate: 'M2738GH',
    description: 'Potencia al desnudo',
    carImagePath: 'https://i.blogs.es/3f2126/1969-ford-mustang-boss-429-black-jade-1p/1366_2000.jpg',
    creatorId: {
        username: 'Alejandro',
        profilePicPath: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
        phoneNumber: 643434783,
        role: 'ADMIN'
      },
    ownerName: "Social Motors",
    state: "Usado",
    kilometres: 15000,
    location: { coordinates: [40.409722, -3.719714]
    },
    price: 20000,
    adStatus: "En venta",
  },
  {
    brand: "Porsche",
    model: "911 2,7",
    manufacturingYear: 1995,
    plate: 'M2363RF',
    description: 'Gran coche perfecto para ciudad',
    carImagePath: 'https://assets.catawiki.nl/assets/2016/6/13/4/2/e/42e0c6e6-312f-11e6-9999-88e29ace370b.jpg',
    creatorId: {
        username: 'Alejandro',
        profilePicPath: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
        phoneNumber: 643434783,
        role: 'ADMIN'
      },
    ownerName: "Social Motors",
    state: "Usado",
    kilometres: 205000,
    location: { coordinates: [40.409727, -3.729718]
    },
    price: 10000,
    adStatus: "En venta",
  },
  {
    brand: "Mercedes-Benz",
    model: "50280 SL Pagoda",
    manufacturingYear: 1960,
    plate: 'A2363MD',
    description: 'Gran coche perfecto para ciudad',
    carImagePath: 'https://clubcocheclasico.com/wp-content/uploads/2014/04/Mercedes-Benz-280-SL-Pagoda.jpg',
    creatorId: {
        username: 'Alejandro',
        profilePicPath: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
        phoneNumber: 643434783,
        role: 'ADMIN'
      },
    ownerName: "Social Motors",
    state: "Usado",
    kilometres: 95000,
    location: { coordinates: [40.409729, -3.721719]
    },
    price: 15000,
    adStatus: "En venta",
  },
  {
    brand: "Rolls-Royce",
    model: "Silver Cloud",
    manufacturingYear: 1955,
    plate: 'K2353GR',
    description: 'Gran coche perfecto para ciudad',
    carImagePath: 'https://pict1.reezocar.com/images/480/automobile.de/RZCATMDE271832733/ROLLS-ROYCE-SILVER-CLOUD-00.jpg',
    creatorId: {
        username: 'Alejandro',
        profilePicPath: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
        phoneNumber: 643434783,
        role: 'ADMIN'
      },
    ownerName: "Social Motors",
    state: "Usado",
    kilometres: 15000,
    location: { coordinates: [40.419725, -3.719716]
    },
    price: 60000,
    adStatus: "Reservado",
  },
  {
    brand: "Porsche",
    model: "911 GTS",
    manufacturingYear: 2019,
    plate: '4563LMH',
    description: 'Gran coche perfecto para ciudad',
    carImagePath: 'https://cdn.drivek.it/configurator-covermobile/cars/es/500/PORSCHE/911/30473_COUPE-2-PUERTAS/porsche-911-gts-coupe-mobile-cover.jpg',
    creatorId: {
        username: 'Alejandro',
        profilePicPath: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
        phoneNumber: 643434783,
        role: 'ADMIN'
      },
    ownerName: "Social Motors",
    state: "KM0",
    kilometres: 100,
    location: { coordinates: [40.429712, -3.729704]
    },
    price: 90000,
    adStatus: "En venta",
  },
  {
    brand: "Volkswagen",
    model: "Beatle",
    manufacturingYear: 1975,
    plate: 'K2353GR',
    description: 'Gran coche perfecto para ciudad',
    carImagePath: 'https://m.dw.com/image/45481197_101.jpg',
    creatorId: {
        username: 'Alejandro',
        profilePicPath: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
        phoneNumber: 643434783,
        role: 'ADMIN'
      },
    ownerName: "Social Motors",
    state: "Usado",
    kilometres: 150000,
    location: { coordinates: [40.419725, -3.729716]
    },
    price: 20000,
    adStatus: "En venta",
  },
  {
    brand: "Ford",
    model: "Mustang GT 289 Cabrio",
    manufacturingYear: 1975,
    plate: 'K2353MR',
    description: 'Gran coche perfecto para ciudad',
    carImagePath: 'https://static.motor.es/fotos-noticias/2018/02/min652x435/ford-mustang-gt-289-cabriolet-henry-ford-2-subasta-201843646_2.jpg ',
    creatorId: {
        username: 'Alejandro',
        profilePicPath: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
        phoneNumber: 643434783,
        role: 'ADMIN'
      },
    ownerName: "Social Motors",
    state: "Usado",
    kilometres: 25000,
    location: { coordinates: [40.400825, -3.829816]
    },
    price: 50000,
    adStatus: "En venta",
  },
  {
    brand: "Cadillac",
    model: "Coupe Deville",
    manufacturingYear: 1955,
    plate: 'T2353GR',
    description: 'Gran coche perfecto para ciudad',
    carImagePath: 'https://i.ytimg.com/vi/73Dpunxby1M/sddefault.jpg ',
    creatorId: {
        username: 'Alejandro',
        profilePicPath: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
        phoneNumber: 643434783,
        role: 'ADMIN'
      },
    ownerName: "Social Motors",
    state: "Usado",
    kilometres: 100000,
    location: { coordinates: [40.425625, -3.770616]
    },
    price: 55000,
    adStatus: "En venta",
  },
  {
    brand: "Nash",
    model: "Super Ambassador",
    manufacturingYear: 1955,
    plate: 'D9053GR',
    description: 'Gran coche perfecto para ciudad',
    carImagePath: 'https://i.ytimg.com/vi/Cra7qsUnW2g/maxresdefault.jpg',
    creatorId: {
        username: 'Alejandro',
        profilePicPath: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
        phoneNumber: 643434783,
        role: 'ADMIN'
      },
    ownerName: "Social Motors",
    state: "Usado",
    kilometres: 19000,
    location: { coordinates: [40.409255, -3.702516]
    },
    price: 63000,
    adStatus: "En venta",
  },
  {
    brand: "Chevrolet",
    model: "Corvette C3 Targa",
    manufacturingYear: 1980,
    plate: 'K2387WR',
    description: 'Gran coche perfecto para ciudad',
    carImagePath: 'https://i.pinimg.com/originals/99/4a/20/994a201d7aafebcb00fb118fd0f4daf3.jpg',
    creatorId: {
        username: 'Alejandro',
        profilePicPath: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
        phoneNumber: 643434783,
        role: 'ADMIN'
      },
    ownerName: "Social Motors",
    state: "Usado",
    kilometres: 18000,
    location: { coordinates: [40.409725, -3.709716]
    },
    price: 40000,
    adStatus: "En venta",
  },
  {
    brand: "Chevrolet",
    model: "Corvette C3 Stingray Targa",
    manufacturingYear: 1978,
    plate: 'K2387PR',
    description: 'Gran coche perfecto para ciudad',
    carImagePath: 'https://i.pinimg.com/originals/05/f6/67/05f667b994dcb75cbb7bb3199bb812b7.jpg',
    creatorId: {
        username: 'Alejandro',
        profilePicPath: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
        phoneNumber: 643434783,
        role: 'ADMIN'
      },
    ownerName: "Social Motors",
    state: "Usado",
    kilometres: 27000,
    location: { coordinates: [40.409725, -3.709716]
    },
    price: 34000,
    adStatus: "En venta",
  },
  {
    brand: "Ford",
    model: "Mustang",
    manufacturingYear: 1964,
    plate: 'K7547WR',
    description: 'Gran coche perfecto para ciudad',
    carImagePath: 'https://www.motorimg.com/images/annonces/383404728583/1.jpg',
    creatorId: {
        username: 'Alejandro',
        profilePicPath: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
        phoneNumber: 643434783,
        role: 'ADMIN'
      },
    ownerName: "Social Motors",
    state: "Usado",
    kilometres: 32000,
    location: { coordinates: [40.419123, -3.733716]
    },
    price: 23000,
    adStatus: "Reservado",
  },
  {
    brand: "Jaguar",
    model: "E-Type",
    manufacturingYear: 1970,
    plate: 'K2387WR',
    description: 'Gran coche perfecto para ciudad',
    carImagePath: 'https://assets.catawiki.nl/assets/2018/7/23/b/4/8/b48f097b-d1d4-4ade-9ffa-e5430aedbd6d.jpg',
    creatorId: {
        username: 'Alejandro',
        profilePicPath: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
        phoneNumber: 643434783,
        role: 'ADMIN'
      },
    ownerName: "Social Motors",
    state: "Usado",
    kilometres: 18000,
    location: { coordinates: [40.400725, -3.719234]
    },
    price: 40000,
    adStatus: "Vendido",
  }
  
];

const createUsers = cars.map(car => {
    const newUser = new User(car.creatorId)
    return newUser.save()
        .then(user => {
            return user.username;
        })
        .catch(error => {
            throw new Error(`Impossible to add the user. ${error}`)
        })
})

let findUsers = Promise.all(createUsers)
    .then(users => {
        // return users.map(user => console.log(user._id))
        return cars.map(car => {
            return User.findOne({ username: car.creatorId.username, phoneNumber: car.creatorId.phoneNumber})
                .then(user => {

                    if (!user) {
                        throw new Error(`unknown creatorId ${car.creatorId.username} ${car.creatorId.phoneNumber}`);
                    }
                    return Object.assign({}, car, { creatorId: user._id });
                })

        });
    })
    .catch(error => {
        throw new Error(error)
    })

    

const saveCars = findUsers.then(findUsers => {
    return Promise.all(findUsers)
        .then(cars => {
            return cars.map(car => {
                const newCar = new Car(car);
                return newCar.save();
            })
        })
}).then(savedCars => {
    Promise.all(savedCars)
        .then(cars => cars.forEach(car => console.log(`created ${car.model}`)))
        .then(() => mongoose.connection.close())
        .catch(err => console.log("Error while saving the book: ", err))
})