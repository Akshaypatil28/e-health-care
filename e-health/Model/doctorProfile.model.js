const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
    uid: {
        type: Number,
        required: true
    },
    name: {
        type: Number,
        required: true
    },
    age: {
        type: 'string',
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    specialist: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('doctorprofiles', ProfileSchema);