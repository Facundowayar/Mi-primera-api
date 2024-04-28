
const mongoose = require ("mongoose");

const datesSchema = mongoose.Schema ({
    marca: {
        type : String,
        required : true
    },
    modelo: { 
        type : String,
        required : true
    },
    año: {
        type : Number,
        required : true 
    }, 
    kilometraje: {
        type : Number,
        required : true
    },
    estado: {
        type : String,
        required : true
    },
    servise: {
        type : Number,
        required : true
    },
    papeles: {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("Vehiculos", datesSchema);