var mongoose = require('mongoose');

module.exports = mongoose.model('Patient', {
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },    
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    dob: Date,
    telephone: {
    	type: Number,
    	length: 10,
        unique: true
    },
    details: {
        type: String,
        default: ''
    }
});