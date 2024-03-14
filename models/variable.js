const {mongoose} = require('mongoose');

const variableSchema = new mongoose.Schema({
    type: String,
    name: String,
    description: String,
    unit: String,
}, {timestamps: true})

const Variable = mongoose.model('Variable', variableSchema);