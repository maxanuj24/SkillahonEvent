const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    id: Number,
    name: String,
    type: String,
    length:Number,
    views:Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Event', EventSchema);