const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VisitSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    telephone_number: {
        type: String,
        required: true,
        unique: true
    },
    dui: {
        type: String,
        required: true, 
    },
    number_of_house: {
        type: String,
        required: true, 
    },
    license_plate: {
        type: String,
        required: true, 
    },
}, {
    timestamps: true,
    toJSON: {
        transform(doc, ret) {
            delete ret.__v;
            delete ret.createdAt;
        }
    }
})

module.exports = mongoose.model('visit', VisitSchema);