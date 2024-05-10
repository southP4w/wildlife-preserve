import {Hero} from '../components/Hero'
import {HomeCards} from '../components/HomeCards'
import {PassListings} from '../components/PassListings.jsx'
import {ViewAllPasses} from "../components/ViewAllPasses.jsx";

export const HomePage = () => {
	return (
		<>
			<Hero/>
			<HomeCards/>
			<PassListings isHome={true}/>
			<ViewAllPasses/>
		</>
	)
}