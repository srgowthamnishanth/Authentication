const mongoose =require('mongoose');

var schema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: {type: String}
});

var users = mongoose.model('registeredUsers', schema);

module.exports = users;