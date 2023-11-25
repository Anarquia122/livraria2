const mongoose = require('mongoose');



const banco = mongoose.connect('mongodb+srv://italogusto823:floresta2@cluster0.1wmzbir.mongodb.net/?retryWrites=true&w=majority')

module.exports = { banco, mongoose };