import {NavLink} from 'react-router-dom';
import React, {useState} from 'react';
import axios from 'axios';

// responsible for handling user logins.
export const Password = () => {
	// useState hook to keep track of username and password input by the user
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
// handleSubmit function will be called when the form is submitted
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			//POST the username and password to the server endpoint for authentication
			const response = await axios.post('http://localhost:5000/login', {username, password});
			console.log('Login successful:', response.data);
			alert('Login successful!');
		} catch (error) {
			console.error('Login error:', error);
			alert('Failed to sign in');
		}
	};

//Styles the page making the actual section to sign in
	return (
		<div style={{
			width: '100%',
			maxWidth: '400px',
			backgroundColor: 'white',
			padding: '20px',
			borderRadius: '8px',
			boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
		}}>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
						Username
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="username"
						type="text"
						placeholder="Username"
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
				</div>
				<div className="mb-6">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
						Password
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						placeholder="******************"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Sign In
					</button>
					<NavLink
						to="/creation"
						className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inline-block text-center"
						style={{lineHeight: 'normal'}}
					>
						Create Account
					</NavLink>
				</div>
			</form>
		</div>
	);
};
