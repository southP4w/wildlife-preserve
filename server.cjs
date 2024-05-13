// server.cjs
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err));


// Example user model
const User = mongoose.model('User', new mongoose.Schema({email: String, username: String, password: String}));

app.post('/register', async (req, res) => {
	const {email, username, password} = req.body;
	const newUser = new User({email, username, password});
	await newUser.save();
	res.send('Account created successfully');
});

// Chatbot Endpoint
app.post('/bot', (req, res) => {
	const {message} = req.body;
	// Simple chatbot logic
	let reply = "I'm not sure how to respond to that.";
	if (message.toLowerCase().includes('hello')) {
		reply = 'Hello there!';
	} else if (message.toLowerCase().includes('help')) {
		reply = 'How can I assist you today?';
	}
	res.json({reply});
});

app.post('/login', async (req, res) => {
	const {username, password} = req.body;
	try {
		const user = await User.findOne({username: username});
		if (user && user.password === password) {
			res.send('Sign in successful');
		} else {
			res.status(401).send('Invalid credentials');
		}
	} catch (error) {
		console.error('Error during login:', error);
		res.status(500).send('Server error');
	}
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
