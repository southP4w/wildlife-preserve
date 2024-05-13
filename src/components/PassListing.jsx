import {useState} from 'react'
import {FaTree} from 'react-icons/fa'

export const PassListing = ({pass}) => {
	const [showDescription, setShowDescription] = useState(false)
	let id = pass.id, title = pass.title, features = pass.features, price = pass.price
	if (!showDescription)
		features = features.substring(0, 90) + '...'
	return (
		<div className="bg-white rounded-xl shadow-md relative">
			<div className="p-4">
				<div className="mb-6">
					<div className="text-gray-600 my-2">{title}</div>
					<h3 className="text-xl font-bold"></h3>
				</div>
				<div className="mb-5"></div>
				<h3 className="text-indigo-500 mb-2">{features}</h3>
				<button className={'text-indigo-500.mb-5 hover:text-indigo-600'}
						onClick={() => setShowDescription((previousState) => !previousState)}>
					Show {showDescription ? 'less' : 'more'}
				</button>
				<div className="border border-gray-100 mb-5"></div>
				<div className="flex flex-col lg:flex-row justify-between mb-4">
					<div className="text-green-600 mb-3">
						<FaTree className={'inline text-lg mb-1 mr-1'}/>{price}
					</div>
					<a href={`/passes/${id}`}
					   className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
						Read More
					</a>
				</div>
			</div>
		</div>
	)
}