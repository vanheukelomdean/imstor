const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    path: {
        type: String,
        required: false
    },
    private: {
        type: Boolean,
        default: true,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
});

const Image = mongoose.model('images', ImageSchema);

module.exports = Image;