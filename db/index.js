const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/blogdb');
        console.log('Connected to database');
    } catch (error) {
        console.log('Error connecting to database', error);
    }
}

module.exports = connectDB;