const VisitModel = require('../models/visit.model');
const debug = require("debug")("app:auth-controller");

const controller = {};

controller.registerVisit = async (req, res) => {
    try {

        const { name, telephone_number, dui, number_of_house, license_plate } = req.body;

        const newRegister = new VisitModel(
            {
                name: name,
                telephone_number: telephone_number,
                dui: dui,
                number_of_house: number_of_house,
                license_plate: license_plate

            }
        )


    await newRegister.save();
        
    return res.status(201).json({ message: "Saved visit!" })
    } catch (error) {
    debug({ error });
    return res.status(500).json({ error: "Could not register your visit" })
    }
}

module.exports = controller;