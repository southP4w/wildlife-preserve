require('dotenv').config(); // This loads the environment variables from the .env file
//function to connect to the MongoDB database
const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		// Connect to MongoDB using the URI from .env file
		await mongoose.connect(process.env.MONGO_URI, { // Using the connection string from the .env file
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('MongoDB connected successfully.');
	} catch (err) {
		console.error('Database connection failed:', err);
		process.exit(1); // Exits the process if the connection fails
	}
};

module.exports = connectDB; // Make the connectDB function available to other parts of the app
