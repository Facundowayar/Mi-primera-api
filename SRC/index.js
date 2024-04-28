
// librerias
const express = require ("express");
const mongoose = require ("mongoose");
require("dotenv").config();
//direcciones
const model = require ("./model/vehiculos");
// instancio el objeto app
const app = express();
//conexion a mongoDB
mongoose.connect(process.env.DATABASE_URL).then(() => console.log ("conectado al mongoDB atlas")).catch ((error) => console.error(Error));






app.use(express.json());
const routes = require("./routes/vehiculo");
app.use("/api",routes)
app.listen(4000,() => {
console.log ("server iniciado en el port 4000")
});

