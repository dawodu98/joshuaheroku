const mongoose = require("mongoose")

const schemaStructure = mongoose.Schema({
    Country:{
        type: String,
        required: true,
        unique: [true, "This country already exist"]
    },
    name:{
        type: String,
        required: true,
        unique: [true, "This name already exist"]
    },
    rating:{
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model("monies", schemaStructure)
