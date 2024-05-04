// Source: https://www.youtube.com/watch?v=LDB4uaJ87e0&t=2724s
// eslint-disable-next-line react/prop-types
export const Hero = ({mainHeading = 'Default Heading', mainHeadingSubtext = 'Default Heading Subtext'}) =>
    (
        <section className='bg-indigo-700 py-20 mb-4'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
                <div className='text-center'>
                    <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>{mainHeading}</h1>
                    <p className='my-4 text-xl text-white'>{mainHeadingSubtext}</p>
                </div>
            </div>
        </section>
    )