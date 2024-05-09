import {Navbar} from "../components/Navbar.jsx";
import {Hero} from "../components/Hero.jsx";
import {HomeCards} from "../components/HomeCards.jsx";
import {PassListings} from "../components/PassListings.jsx";
import {ViewAllPasses} from "../components/ViewAllPasses.jsx";

const App = () => {
	return (
		<>
			<Navbar/>
			<Hero/>
			<HomeCards/>
			<PassListings/>
			<ViewAllPasses/>
		</>
	)
}

export default App
