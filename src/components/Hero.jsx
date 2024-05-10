// Source: https://www.youtube.com/watch?v=LDB4uaJ87e0&t=2724s

import ostrich from '../assets/images/ostrich.jpg'

export const Hero = ({
						 mainHeading = 'CUNY Queens College Wildlife Preserve',
						 mainHeadingSubtext = 'Plan your adventure'
					 }) => {
	return (
		<section className='relative w-full'>
			<img className='w-full h-96' src={ostrich} alt='Ostrich Logo' style={{objectFit: 'cover'}}/>
			<div className='absolute top-0 left-0 p-8'>
				<div className='text-left'>
					<h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>{mainHeading}</h1>
					<p className='mt-4 text-xl text-white'>{mainHeadingSubtext}</p>
				</div>
			</div>
		</section>
	)
}