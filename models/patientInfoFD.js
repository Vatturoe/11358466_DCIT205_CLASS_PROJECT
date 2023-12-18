const mongoose = require('mongoose')

const patientFDSchema = mongoose.Schema (
    {
        patientId: {
            type: "Number",
            required: [true, "Please enter patient's id"]
        },

        surname: {
            type: "String",
            required: [true, "Please enter patient's surname"]
        },

        othername: {
            type: "String",
            required: [true, "Please enter patient's othername"]
        },

        gender: {
            type: "String",
            required: [true, "Please enter patient's gender"]
        },

        phoneNumber: {
            type: "Number",
            required: [true, "Please enter patient's phone number"]
        },

        residentialAddress: {
            type: "String",
            required: [true, "Please enter patient's residential address"]
        },

        emergencyName: {
            type: "String",
            required: [true, "Please enter patient's emergency name"]
        },

        contact: {
            type: "Number",
            required: [true, "Please enter patient's emergency contact"]
        },

        relationship: {
            type: "String",
            required: [true, "Please enter patient's relationship with the patient"]
        },

    }
)

const patientFDModel = mongoose.model('Product', productSchema)
module.exports = Product;
