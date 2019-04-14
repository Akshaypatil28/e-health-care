const mongoose = require('mongoose');

const PatientData = mongoose.Schema({
    uid: {
        type: String
    },
    disease: {
        type: String
    },
    hospital: {
        type: String  
    },
    doctor: {
        type: String
    }
});

module.exports = mongoose.model('patientdatas', PatientData);