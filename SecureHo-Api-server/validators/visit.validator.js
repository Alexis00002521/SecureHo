const { body } = require("express-validator");
const validators = {};

validators.registervisitValidator = [
    body("name")
    .notEmpty().withMessage("The field is empty "),

    body("telephone_number")
    .notEmpty().withMessage("The field is empty")
    .isLength({ max: 8 }).withMessage("The telephone_number cannot be more than 8 characters"),

    body("dui")
    .notEmpty().withMessage("The field is empty")
    .isLength({ max: 9 }).withMessage("Dui cannot be more than 9 characters"),

    body("number_of_house")
    .notEmpty().withMessage("The field is empty"),

    body("license_plate")
    .notEmpty().withMessage("The field is empty")
    .isLength({ max: 14 }).withMessage("The license_plate cannot be more than 14 characters"),
];

module.exports = validators;