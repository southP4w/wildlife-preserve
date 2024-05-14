import {useState, useEffect} from 'react'
import {PassListing} from "./PassListing.jsx"
import {Spinner} from "./Spinner.jsx"

export const PassListings = ({isHome = false}) => {
	const [passes, setPasses] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchPasses = async () => {
			const apiURL = isHome
				? '/api/passes?_limit=3'
				: '/api/passes'
			try {
				const res = await fetch(apiURL)
				const data = await res.json()
				setPasses(data)
			} catch (error) {
				console.log('Error loading data', error)
			} finally {
				setLoading(false)
			}
		}
		fetchPasses()
	}, [])

	return (
		<section className="bg-blue-50 px-4 py-10">
			<div className="container-xl lg:container m-auto">
				<h2 className="text-3xl font-bold text-green-900 mb-6 text-center">
					Pass Listings </h2>
				{loading ? (<Spinner loading={loading}/>) : (
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{
							passes.map((pass) => (
								<PassListing key={pass.id} pass={pass}/>
							))
						}
					</div>
				)}
			</div>
		</section>
	)
}
