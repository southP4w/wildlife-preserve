import passes from '../passes.json'
import {PassListing} from "./PassListing.jsx";

export const PassListings = ({isHome = false}) => {
	const passListings = isHome ? passes.slice(0, 3) : passes
	return (
		<section className='bg-blue-50 px-4 py-10'>
			<div className='container-xl lg:container m-auto'>
				<h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
					Pass Listings </h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					{
						passListings.map((pass) => (
							<PassListing key={pass.id} pass={pass}/>
						))
					}
				</div>
			</div>
		</section>
	);
};
