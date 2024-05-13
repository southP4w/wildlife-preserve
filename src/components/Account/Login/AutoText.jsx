import React, {useState, useEffect} from 'react';

export const AutoText = () => {
	const defaultMessage = "Welcome To the Zoo!";
	const [speed, setSpeed] = useState(100); // Initial speed in milliseconds, lower is faster
	const [message, setMessage] = useState('');

	useEffect(() => {
		const timer = setTimeout(() => {
			if (message.length < defaultMessage.length) {
				setMessage(defaultMessage.slice(0, message.length + 1));
			} else {
				setMessage(''); // Reset the message once it's fully displayed
			}
		}, speed);

		return () => clearTimeout(timer); // Clean up the timer
	}, [message, speed]);

	const changeSpeed = (change) => {
		// Change speed in increments of 10, minimum 10ms, maximum 200ms
		const newSpeed = speed + change;
		if (newSpeed >= 10 && newSpeed <= 200) {
			setSpeed(newSpeed);
		}
	};

	return (
		<div style={{textAlign: 'center', margin: '20px'}}>
			<div style={{fontSize: '24px', height: '30px'}}>
				{message}
			</div>
			<div>
				<button onClick={() => changeSpeed(-10)}
						style={{fontSize: '16px', padding: '10px', marginRight: '5px'}}>▲
				</button>
				Speed: {speed} ms
				<button onClick={() => changeSpeed(10)}
						style={{fontSize: '16px', padding: '10px', marginLeft: '5px'}}>▼</button>
			</div>
		</div>
	);
};
