// Source: https://www.youtube.com/watch?v=LDB4uaJ87e0&t=2931s

import Card from './Card.jsx'
import {useState} from 'react';

export const HomeCards = () => {
	const [rippleStyle1, setRippleStyle1] = useState({});
	const [rippleStyle2, setRippleStyle2] = useState({});

	const handleClick1 = (event) => {

		const button = event.currentTarget;
		const rect = button.getBoundingClientRect();
		const size = Math.max(rect.width, rect.height);
		const x = event.clientX - rect.left - size / 2;
		const y = event.clientY - rect.top - size / 2;

		const newRippleStyle = {
			position: 'absolute',
			borderRadius: '50%',
			backgroundColor: 'rgba(255, 255, 255, 0.75)',
			width: `${size}px`,
			height: `${size}px`,
			left: `${x}px`,
			top: `${y}px`,
			transform: 'scale(0)',
			animation: 'ripple 600ms linear',
		};

		setRippleStyle1(newRippleStyle);

		setTimeout(() => setRippleStyle1({}), 600);  // Clear the style after animation
	};

	const handleClick2 = (event) => {

		const button = event.currentTarget;
		const rect = button.getBoundingClientRect();
		const size = Math.max(rect.width, rect.height);
		const x = event.clientX - rect.left - size / 2;
		const y = event.clientY - rect.top - size / 2;

		const newRippleStyle = {
			position: 'absolute',
			borderRadius: '50%',
			backgroundColor: 'rgba(255, 255, 255, 0.75)',
			width: `${size}px`,
			height: `${size}px`,
			left: `${x}px`,
			top: `${y}px`,
			transform: 'scale(0)',
			animation: 'ripple 600ms linear',
		};

		setRippleStyle2(newRippleStyle);

		setTimeout(() => setRippleStyle2({}), 600);  // Clear the style after animation
	};

	return (
		<>
			<style>
				{`
                    @keyframes ripple {
                        from {
                            transform: scale(0);
                            opacity: 0.5;
                        }
                        to {
                            transform: scale(4);
                            opacity: 0;
                        }
                    }
                `}
			</style>
			<section className="py-4">
				<div className="container-xl lg:container m-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
						<Card>
							<h2 className="text-2xl font-bold">Heading</h2>
							<p className="mt-2 mb-4">
								Description/Paragraph</p>
							<div className="relative overflow-hidden">
								<a href="/page.html"
								   className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
								   onClick={handleClick1}>
									More
								</a>
								<span style={rippleStyle1}></span>
							</div>
						</Card>
						<Card bg={'bg-indigo-100'}>
							<h2 className="text-2xl font-bold">Heading</h2>
							<p className="mt-2 mb-4">
								Description/Paragraph</p>
							<div className="relative overflow-hidden">
								<a href="/page.html"
								   className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
								   onClick={handleClick2}>
									More
								</a>
								<span style={rippleStyle2}></span>
							</div>
						</Card>
					</div>
				</div>
			</section>
		</>
	)
}