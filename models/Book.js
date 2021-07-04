const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    authors:[String],
    description:{
        type: String,
    },
    image:{
        type: String,
    },
    link:{
        type: String,
    },
});

const Book = mongoose.model(BookSchema);

module.exports = Book;