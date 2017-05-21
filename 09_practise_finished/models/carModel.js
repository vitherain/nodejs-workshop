const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
    brand: String,
    model: String,
    year: Number
});

const Cars = mongoose.model('Cars', carSchema);

module.exports = Cars;
