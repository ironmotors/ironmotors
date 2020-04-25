const mongoose = require("mongoose")
const Schema = mongoose.Schema

const carSchema = new Schema({
    brand: {
        type: String,
        enum: ["Abarth", "Alfa Romeo", "Alpine", "Aston Martin", "Audi", "Bentley", "BMW", "Borgward", "Bugatti", "BYD", "Cadillac", "Caterham", "Chevrolet", "Citroën", "Cupra", "Dacia", "Dodge", "DS Automobiles", "Faraday Future", "Ferrari", "Fiat", "Ford", "Fornasari", "GTA Motor", "Honda", "Hurtan", "Hyundai", "Infiniti", "Isuzu", "Iveco", "Jaguar", "Jeep", "KIA Motors", "Koenigsegg", "KTM", "Lada", "Lamborghini", "Lancia", "Land Rover", "Lexus", "Lotus", "Mahindra", "Maserati", "Mazda", "McLaren", "Mercedes-Benz", "Mini", "Mitsubishi", "Morgan", "Nissan", "Opel", "Pagani", "Peugeot", "Piaggio", "Polaris", "Polestar", "Porsche", "Renault", "Rolls-Royce", "Saab", "SEAT", "Škoda", "Smart", "SsangYong", "Subaru", "Suzuki", "TATA", "Tesla", "Toyota", "Tramontana", "UROVESA", "Volkswagen", "Volvo", "W Motors"],
        required: true
    },
    model: {
        type: String,
        required: true
    },
    manufacturingYear: {
        type: Number,
        required: true
    },
    plate: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    carImagePath: {
        type: [String],
        required: true
    },
    creatorId: {
         type: Schema.Types.ObjectId,
         ref: "User"
    },
    state: {
        type: String,
        enum: ["New", "Used", "KM0"],
        required: true
    },
    kilometres: {
        type: Number,
        required: true
    },
    location: {
        type: {
            type: String
        },
        coordinates: [Number],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    adStatus: {
        type: String,
        enum: ["On sale", "Sold", "Inactive"],
        required: true
    }

}, {
    timestamps: true
})

const Car = mongoose.model("Car", carSchema)

module.exports = Car