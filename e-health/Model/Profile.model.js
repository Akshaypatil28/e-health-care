const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
    name: {
            type: String,
            required: true
    },
    age: {
            type: 'string',
            required: true
    }
})

module.exports = mongoose.model('profiles', ProfileSchema);