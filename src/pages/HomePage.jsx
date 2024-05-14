import {Hero} from '../components/Hero'
import {HomeCards} from '../components/HomeCards'
import {PassListings} from '../components/PassListings.jsx'
import {ViewAllPasses} from "../components/ViewAllPasses.jsx";
import {ChatBot} from '../components/ChatBot';

export const HomePage = () => {
	/**
	 * This is the structure of the HomePage
	 */
	return (
		<>
			<Hero/>
			<HomeCards/>
			<PassListings isHome={true}/> {/* If isHome is true, the number of passes displayed is limited to 3 */}
			<ViewAllPasses/>
			<ChatBot/>
		</>
	)
}