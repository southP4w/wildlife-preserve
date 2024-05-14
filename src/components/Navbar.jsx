// Source: https://www.youtube.com/watch?v=LDB4uaJ87e0&t=2520s
import logo from '../assets/images/logo.png'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
	const linkClass = ({isActive}) => isActive
		? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
		: 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'

	return (
		<nav className="bg-green-900 border-b border-green-900">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="flex h-20 items-center justify-between">
					<div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
						<NavLink to="/" className="flex flex-shrink-0 items-center mr-4">
							<img className="h-10 w-auto" src={logo} alt="Ostrich Logo"/>
							<span
								className="hidden md:block text-white text-2xl font-bold ml-2">QC Wildlife Preserve</span>
						</NavLink>
						<div className="md:ml-auto">
							<div className="flex space-x-2">
								<NavLink to="/" className={linkClass}>Home</NavLink>
								<NavLink to="/passes" className={linkClass}>Pricing</NavLink>
								<NavLink to="/animals" className={linkClass}>Animals</NavLink>
								<NavLink to="/contact" className={linkClass}>Contact</NavLink>
								<NavLink to="/login" className={linkClass}>Login</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}