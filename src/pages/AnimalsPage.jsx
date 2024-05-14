import ReactDOM from 'react-dom/client'
import '../index.css'
import Animals from '../Nons/Animals.jsx'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "../dev/index.js";
import Carousel from '../components/carousel.jsx';
import React from "react"; // Assuming Carousel.jsx in the same directory
import DadJoke from '../components/dad_joke_udemy.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
			<Animals/>
		</DevSupport>
	</React.StrictMode>
)
const animals = [
	{
		name: "Lion",
		imageUrl: "https://images.unsplash.com/photo-1641236247214-2d5a33c6d391?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		description: "The lion, known as the \"king of the jungle,\" commands respect with its majestic mane and powerful roar. With a sleek, golden coat and piercing eyes, lions symbolize strength and courage in the wild. As apex predators, they play a crucial role in maintaining the balance of their ecosystems.\n" +
			"\n",
	},
	{
		name: "Polar Bear",
		imageUrl: "https://images.unsplash.com/photo-1669120181221-1f5bb5a34ffc?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		description: " The polar bear, native to the Arctic region, is instantly recognizable by its thick fur and snowy white coat, perfectly adapted to its icy habitat. These formidable predators are skilled hunters, relying on their keen sense of smell and powerful paws to navigate the frozen landscape and hunt seals. As icons of the Arctic, polar bears face significant threats due to climate change and habitat loss.\n" +
			"\n",
	},
	{
		name: "llama",
		imageUrl: "https://images.unsplash.com/photo-1589182337358-2cb63099350c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		description: "The llama, a domesticated South American camelid, is renowned for its unique appearance and gentle disposition. Standing tall with a long, elegant neck, llamas are adorned with a soft and woolly coat, which comes in various colors, from creamy white to shades of brown and black. Their endearing faces are characterized by large, expressive eyes and long, curved ears. Renowned for their intelligence and social nature, llamas have been invaluable companions to humans for centuries, serving as beasts of burden, providers of wool, and even as therapy animals.",
	},
	{
		name: "Elephant",
		imageUrl: "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2720&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		description: "Elephants, the largest land animals, are characterized by their massive size, long trunk, and distinctive tusks. Known for their intelligence, empathy, and strong social bonds, elephants form tight-knit family groups led by matriarchs. Despite their gentle nature, they are formidable creatures capable of shaping their environments and leaving a lasting impact on the ecosystems they inhabit.",
	},
	{
		name: "Parrot",
		imageUrl: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdpbGRsaWZlfGVufDB8MXwwfHx8MA%3D%3D",
		description: "Parrots, with their vibrant plumage and remarkable ability to mimic sounds, captivate with their beauty and intelligence. These highly social birds form strong bonds with their flock members and demonstrate complex behaviors, including problem-solving and vocal communication. Found in tropical and subtropical regions around the world, parrots play essential roles in pollination and seed dispersal.\n" +
			"\n",
	},
	{
		name: "Fox",
		imageUrl: "https://images.unsplash.com/photo-1584565168909-c8d22bdacf4c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHwxMDM5fHxlbnwwfHx8fHw%3D",
		description: " With its russet fur and bushy tail, the fox is a cunning and adaptable predator found in various habitats worldwide. Renowned for its intelligence and agility, the fox employs stealth and speed to hunt small mammals, birds, and insects. Revered in folklore for its sly nature, the fox symbolizes resourcefulness and cunning in both the natural world and human imagination.\n" +
			"\n" +
			"\n" +
			"\n" +
			"\n",
	},
	{
		name: "Crow",
		imageUrl: "https://images.unsplash.com/photo-1572608705929-0e245b6fa24d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8MTAzOXx8ZW58MHx8fHx8 ",
		description: "Crows, often associated with mystery and intelligence, are highly adaptable birds found in diverse habitats across the globe. With their glossy black feathers and sharp beaks, crows exhibit remarkable problem-solving skills and social behaviors, including cooperative breeding and complex communication. Despite their sometimes contentious relationship with humans, crows contribute to ecosystem health by scavenging and controlling pest populations. ",
	},
	{
		name: "Jellyfish",
		imageUrl: "https://images.unsplash.com/photo-1545537619-3b5475acd977?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amVsbHklMjBmaXNofGVufDB8fDB8fHww ",
		description: " Jellyfish, ethereal creatures of the ocean, float gracefully through the water with their translucent bodies and trailing tentacles. Despite their delicate appearance, jellyfish are efficient predators, capturing prey with their venomous stingers. As vital components of marine ecosystems, jellyfish serve as both predators and prey, playing a crucial role in the ocean's delicate balance.",
	},
	// Add more animals with image URLs
];
const AnimalsPage = () => {
	const animalImageUrls = animals.map((animal) => animal.imageUrl);

	return (
		<div className="bg-gradient-to-br from-amber-50 to-amber-100 min-h-screen py-12 px-4 text-amber-600">
			<h1 className="text-4xl font-extrabold text-center tracking-tight leading-tight mb-8">Discover Our Amazing
				Animal Kingdom</h1>

			{/* Styled Carousel with padding */}
			<div className="w-full max-w-screen-xl mx-auto mb-8 rounded-lg overflow-hidden shadow-lg bg-amber-200 p-4">
				<div className="carousel-wrapper">
					<Carousel items={animalImageUrls}/>
				</div>
			</div>

			{/* Cards for displaying animal information */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
				{animals.map((animal) => (
					<div key={animal.name} className="bg-white p-6 rounded-lg shadow-lg">
						<img src={animal.imageUrl} alt={animal.name} className="w-full h-auto rounded-lg mb-4"/>
						<div>
							<h2 className="text-lg font-semibold mb-2">{animal.name}</h2>
							<p className="text-sm mb-4">{animal.description}</p>
						</div>
					</div>
				))}
			</div>
			{/* Dad Joke Section */}
			<div className="container mx-auto py-12 px-4">
				<div className="max-w-lg mx-auto">
					<div className="bg-white shadow-md rounded-lg overflow-hidden">
						<div className="p-4">
							<DadJoke />
						</div>
					</div>
				</div>
			</div>

			{/* YouTube Video */}
			<div className="mt-12 max-w-screen-lg mx-auto bg-amber-300 p-4 rounded-lg">
				<div className="relative" style={{paddingTop: "56.25%"}}>
					<div className="absolute top-0 left-0 w-full h-full" style={{padding: "20px"}}>
						<iframe
							className="w-full h-full"
							width="560"
							height="315"
							src="https://www.youtube.com/embed/zuCRSwWssVk?si=7g4zzx4U_lF0mpBT"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AnimalsPage;

