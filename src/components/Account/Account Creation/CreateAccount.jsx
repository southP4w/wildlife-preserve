import background from '../../../assets/images/ZooBack.jpg';  // Ensure the path is correct

export const CreateAccount = () => {
	// State to keep track of password length
	const [blurValue, setBlurValue] = useState(20);

	const handlePasswordChange = (event) => {
		const inputLength = event.target.value.length;
		const newBlurValue = Math.max(20 - inputLength * 2, 0); // Ensuring the blur value doesn't go below 0
		setBlurValue(newBlurValue);
	};

	return (
		<section style={{ position: 'relative', height: '96vh' }}>
			<img id='background' className='w-full h-full' src={background} alt='Background Image' style={{
				objectFit: 'cover',
				margin: '10px',
				filter: `blur(${blurValue}px)`  // Ensure this line is uncommented and correctly formatted
			}}/>
			<div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center' style={{ margin: '20px' }}>
				<div className='bg-white bg-opacity-75 shadow-md rounded px-8 pt-6 pb-8 mb-4' style={{ maxWidth: '400px' }}>
					<form>
						<div className='mb-4'>
							<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
								Email
							</label>
							<input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='email' placeholder='Enter your email'/>
						</div>
						<div className='mb-4'>
							<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
								Username
							</label>
							<input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder='Choose a username'/>
						</div>
						<div className='mb-6'>
							<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
								Password
							</label>
							<input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' id='password' type='password' placeholder='Create a password' onChange={handlePasswordChange}/>
						</div>
						<div className='flex items-center justify-center'>
							<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
								Create Account
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default CreateAccount;
