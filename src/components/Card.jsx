// Source: https://youtu.be/LDB4uaJ87e0?t=3018

// eslint-disable-next-line react/prop-types
const Card = ({children, bg = 'bg-gray-100'}) => {
	/**
	 * Individual Card previews for the HomeCards.
	 */
	return (
		<div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>
	)
}
export default Card