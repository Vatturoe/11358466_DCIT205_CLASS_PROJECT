const mongoose = require('mongoose')

const patientNSchema = mongoose.Schema (
    {
        bloodPressure: {
            type: "Number",
            required: [true, "Please enter patient's blood pressure"]
        },

        temperature: {
            type: "Number",
            required: [true, "Please enter patient's temperature"]
        },

        pulse: {
            type: "String",
            required: [true, "Please enter patient's pulse"]
        },

        spo2: {
            type: "number",
            required: [true, "Please enter patient's spo2"]
        },

    }
)

const patientNModel = mongoose.model('Product', productSchema)
module.exports = PatientNInfo;
