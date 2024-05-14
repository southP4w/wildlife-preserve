import React, {useState} from 'react';
import axios from 'axios';

export const ChatBot = () => {
	const [message, setMessage] = useState('');
	const [replies, setReplies] = useState([]);

	const sendMessage = async () => {
		// Send POST request to the bot server with user message
		const response = await axios.post('http://localhost:5000/bot', {message});
		// Update replies state with user query and bot's reply
		setReplies([...replies, {query: message, reply: response.data.reply}]);
		// Clear the input message after sending
		setMessage('');
	};

	return (
		<div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
			<h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Chat with our Bot</h1>
			<div className="mb-4">
				<input type="text"
					   className="form-input w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
					   value={message} onChange={e => setMessage(e.target.value)}
					   onKeyPress={event => event.key === 'Enter' ? sendMessage() : null}/>
				<button onClick={sendMessage}
						className="mt-2 w-full bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
					Send
				</button>
			</div>
			<ul className="list-none space-y-2">
				{replies.map((item, index) => (
					<li key={index} className="bg-gray-100 p-3 rounded-lg">
						<strong>You:</strong> {item.query} {/* Display user query */}
						<br/>
						<strong>Bot:</strong> {item.reply} {/* Display bot's reply */}
					</li>
				))}
			</ul>
		</div>

	);
};
