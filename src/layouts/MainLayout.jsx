import {Outlet} from 'react-router-dom'
import {Navbar} from "../components/Navbar.jsx";

export const MainLayout = () => {
	return (
		<>
			<Navbar/>
			<Outlet/>
		</>
	)
}