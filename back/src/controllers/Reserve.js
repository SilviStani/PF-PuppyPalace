const { Reserve, User, Clinic } = require("../db.js");

// ---------------------------- Funciones ---------------------------- \\

const reserveId = async(id) => {
    try {
        const idReserve = await Reserve.findByPk(id)
        return idReserve;
    } catch (error) {
        return res.status(404).send(error)
    }
}

const clinicId = async(id) => {
    try {
        const clinic = await Clinic.findByPk(id)
        return clinic;
    } catch (error) {
        return res.status(404).send(error)
    }
}

const userId = async(id) => {
    try {
        const user = await User.findByPk(id)
        return user;
    } catch (error) {
        return res.status(404).send(error)
    }
}

// ------------------------------ Rutas ------------------------------ \\

const getReserve = async (req, res) => {
    try {
        const reserve = await Reserve.findAll();
        return res.status(200).json(reserve)
    } catch (error) {
        res.status(400).send(error)
    }
}

const getReserveId = async (req, res) => {
    try {
        const id = req.params.id;
        const idDetails = await reserveId(id)
        if(!idDetails) {
            return res.status(404).send("No hay reservas con este id")
        }
        res.status(200).json(idDetails)
    } catch (error) {
        res.status(404).send(error)
    }
}

const postReserve = async (req, res) => {
    let {
        ammount,
        date,
        hourly,
        description,
        city
    } = req.body;
  
    try{
        if( ammount, date, hourly, description, city ) {
            let newReserve = await Reserve.create({
                ammount,
                date,
                hourly,
                description,
                city
            })

            //const user = await ;
            //const clinic = await ;

            await user.setReserve(newReserve)
            await clinic.setReserve(newReserve)

            res.status(201).json(newReserve)
        } else {
            res.status(401).send({error: "Por favor complete todos los campos"})
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
  }
  
  module.exports = {
  postReserve,
  getReserve,
  getReserveId
  }