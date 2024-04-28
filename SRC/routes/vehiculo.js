const express = require ("express");
const datescars = require ("../model/vehiculos");

const router = express.Router();

//crear vehiculo
router.post ("/vehiculos", (req,res) => {
    const vehiculo = datescars(req.body);
    vehiculo.save()
    .then ((data)=>res.json(data)).catch ((error) => console.error(Error));

});
//leer vehiculo
router.get ("/vehiculos/:id", (req,res) => {
    const id = req.params.id
    datescars.findById(id)//ejecuta la funcion de callback, se utiliza para leer datos 
    .then ((data)=>res.json(data)).catch ((error) => res.json({ message : error}));
});
//leer todos los datos vehiculos 
router.get ("/vehiculos", (req,res) => {
    datescars.find()
    
    .then ((data)=>res.json(data)).catch ((error) => res.json({ message : error}));
});
// actualizar los datos
router.put("/vehiculos/:id", (req,res) => {
    const { id } = req.params;
    const { marca, modelo, año, kilometraje, estado, servise, papeles} = req.body;
    datescars
    .updateOne({ _id: id }, { $set: { marca, modelo, año, kilometraje, estado, servise, papeles}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

router.delete("/vehiculos/:id", (req,res) => {
    const { id } = req.params;
    datescars
    .deleteOne({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

module.exports = router;
