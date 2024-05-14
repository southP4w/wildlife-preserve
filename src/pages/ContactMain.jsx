import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Contacts from '../Nons/Contacts.jsx'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "../dev/index.js";


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
			<Contacts/>
		</DevSupport>
	</React.StrictMode>

)
const ContactPage = () => {
	// Sample people data
	const people = [
		{
			name: 'Jaskiran Parmar',
			imageUrl: 'https://i.pinimg.com/originals/72/a9/bf/72a9bf205b0af536f5ff55e1e252de80.jpg',
			description: 'My name is Jaskiran Parmar and I am a Senior at Queens College! I have been doing Martial Arts for 10 years, and I absolutely love it! For fun, I love watching Sailor Moon, and going hiking!',
		},
		{
			name: 'Sophia Balachanthiran',
			imageUrl: 'https://pm1.aminoapps.com/6307/2c54b18c5c6771560cef00928b7db25ca0c1e3bf_00.jpg ',
			description: 'My name is Sophia and I am a senior at Queens College. I am interested in back-end developing and have experience in web and VBA developing. My hobbies consist of reading and rock climbing. Nice to meet you! ',
		},
		{
			name: 'Rayan Ahlouche',
			imageUrl: 'https://i.pinimg.com/736x/c2/e6/fc/c2e6fc6e062f87815ea6b892e602e83a.jpg',
			description: 'Hello! My name is Rayan! I am a senior at Queens College!',
		},
		{
			name: 'Daniel Gargiullo',
			imageUrl: 'https://bostonglobe-prod.cdn.arcpublishing.com/resizer/B7urr98RX1G_7VCT8w7iBVfDJaQ=/960x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/CBGCQJ6SKRDYDILJ7X5VSDTWRE.jpg',
			description: 'Hello! My name is Daniel, and I am a Senior at Queens College!',
		},
		{
			name: 'Ardit Hoxhaj',
			imageUrl: 'https://cdn.discordapp.com/attachments/1166898397551267911/1239388116012371968/DSC07701.jpg?ex=66440f21&is=6642bda1&hm=2a698f3b6f1b9f04b3644a37222e87b7fea5f9fa7c60a96f5d3ea7e07dcefaf8& ',
			description: 'Hello, My name is Ardit Hoxhaj. I am a Senior at Queens College. I’m Graduating this semester so long as I pass these classes.',
		}
	];

	return (
		<div style={{ backgroundColor: "#91cc7d", minHeight: "100vh", paddingTop: "50px" }}>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
				{people.map((person, index) => (
					<div key={index} className="bg-green-900 p-6 rounded-lg shadow-lg">
						<img src={person.imageUrl} alt={person.name} className="w-full h-auto rounded-lg mb-4" />
						<div>
							<h2 className="text-lg font-semibold mb-2">{person.name}</h2>
							<p className="text-sm mb-4">{person.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default ContactPage;


