import {FaArrowLeft} from 'react-icons/fa'
import {Link, useLoaderData, useParams} from 'react-router-dom';

const PassPage = () => {
	const {id} = useParams()
	const pass = useLoaderData()

	/**
	 * This is the page for the individual passes.
	 * Pages can be edited here for all PassPages, with parameters being passed for specific values (i.e. price, title, etc.)
	 * by calling the `pass` variable (above)
	 */
	return (
		<>
			<section>
				<div className='container m-auto py-6 px-6'>
					<Link to='/passes' className='text-green-900 hover:text-green-700 flex items-center'>
						<FaArrowLeft className={'mr-2'}/>Back to Pass Listings
					</Link>
				</div>
			</section>
			<section className='bg-indigo-50'>
				<div className='container m-auto py-10 px-6'>
					<div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
						<main>
							<div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
								<div className='text-gray-500 mb-4'>{pass.tier}</div>
								<h1 className='text-3xl font-bold mb-4'>
									{pass.title}</h1>
								<div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
									<i className='fa-solid fa-location-dot text-lg text-orange-700 mr-2'></i>
									<p className='text-orange-700'>{pass.frequency}</p>
								</div>
							</div>
							<div className='bg-white p-6 rounded-lg shadow-md mt-6'>
								<h3 className='text-green-900 text-lg font-bold mb-6'>
									Includes</h3>
								<p className='mb-4'>{pass.features}</p>
								<h3 className='text-green-800 text-lg font-bold mb-2'>Price</h3>
								<p className='mb-4'>{pass.price}</p>
							</div>
						</main>
						<aside>
							<div className='bg-white p-6 rounded-lg shadow-md'>
								<h3 className='text-xl font-bold mb-6'>Pass Details</h3>
								<h2 className='text-2xl'>{pass.title}</h2>
								<p className='my-2'>
									{pass.side.description}</p>
								<hr className='my-4'/>
							</div>
							<div className='bg-white p-6 rounded-lg shadow-md mt-6'>
								<h3 className='text-xl font-bold mb-6'>Select Pass</h3>
								<Link to={`/passes/purchase/${pass.id}`} className='bg-green-600 hover:bg-green-500 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'>Purchase</Link>
							</div>
						</aside>
					</div>
				</div>
			</section>
		</>
	)
}

const passLoader = async ({params}) => {
	const res = await fetch(`/api/passes/${params.id}`)
	return await res.json()
}

export {PassPage as default, passLoader}