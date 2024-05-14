import ClipLoader from 'react-spinners/ClipLoader'

const override = {
	display: 'block',
	margin: '100px auto'
}

export const Spinner = (loading) => {
	/**
	 * Spinner to be displayed while page/page elements are loading
	 */
	return (
		<ClipLoader color={'4338ca'} loading={loading} cssOverride={override} size={150}/>
	)
}