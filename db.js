require('dotenv').config(); // This loads the environment variables from the .env file
const mongoose = require('mongoose');

const connectDB = async () => {
	try {
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

module.exports = connectDB; // Exports the function for use in other parts of the application
