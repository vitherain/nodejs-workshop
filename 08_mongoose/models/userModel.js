const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    userName: String
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
