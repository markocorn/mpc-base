const {mongoose} = require('mongoose');

const predictionSchema = new mongoose.Schema({
    variable: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Variable'
    },
    values: [Date, Number],
});