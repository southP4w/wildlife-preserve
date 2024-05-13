//DO NOT REMOVE!
import React, {useState} from 'react';
import background from '../../../assets/images/ZooBack.jpg';  // Ensure the path is correct
import axios from 'axios';

export const CreateAccount = () => {
	// State to keep track of password length
	const [blurValue, setBlurValue] = useState(20);

	const handlePasswordChange = (event) => {
		const inputLength = event.target.value.length;
		const newBlurValue = Math.max(20 - inputLength * 2, 0); // Ensuring the blur value doesn't go below 0
		setBlurValue(newBlurValue);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();  // Prevent the form from refreshing the page

		// Data to be sent to the server
		const userData = {
			email: event.target.email.value,
			username: event.target.username.value,
			password: event.target.password.value,
		};

		try {
			// Send a POST request to the server endpoint
			const response = await axios.post('http://localhost:5000/register', userData);
			console.log('Account created:', response.data);
			// Optionally, handle response data here
		} catch (error) {
			console.error('Failed to create account:', error.response.data);
			// Optionally, handle errors here
		}
	};


	return (
		<section style={{position: 'relative', height: '96vh'}}>
			<img id="background" className="w-full h-full" src={background} alt="Background Image" style={{
				objectFit: 'cover',
				margin: '10px',
				filter: `blur(${blurValue}px)`  // Ensure this line is uncommented and correctly formatted
			}}/>
			<div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center"
				 style={{margin: '20px'}}>
				<div className="bg-white bg-opacity-75 shadow-md rounded px-8 pt-6 pb-8 mb-4"
					 style={{maxWidth: '400px'}}>
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
								Email
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="email" type="email" placeholder="Enter your email"/>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
								Username
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="username" type="text" placeholder="Choose a username"/>
						</div>
						<div className="mb-6">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
								Password
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="password" type="password" placeholder="Create a password"
								onChange={handlePasswordChange}/>
						</div>
						<div className="flex items-center justify-center">
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								type="submit">
								Create Account
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

