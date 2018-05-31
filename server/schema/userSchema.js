const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');

var schema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        minlength: 1,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String
    },
    tokens: [{
        access: {
            type: String
        },
        token: {
            type: String
        }
    }]
});

// schema.methods.generateAuthToken = function () {
//     var user = this;
//     var access = auth;
//     var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();
//     user.tokens.push({access, token})

    // return user.save().then(() => {
    //     return token;
    // });
// };

var users = mongoose.model('registeredUsers', schema);

module.exports = users;