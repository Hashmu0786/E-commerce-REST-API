const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Mirrar', {
            useNewUrlParser: true,
            useUnifiedTopology: true, // Add this option for new versions of Mongoose
        });

        console.log('Connected to Database :: MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}

connectToDatabase(); // Call the async function to connect

module.exports = mongoose.connetcion;
