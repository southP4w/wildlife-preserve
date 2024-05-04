// Source: https://www.youtube.com/watch?v=LDB4uaJ87e0&t=2931s

import Card from './Card.jsx'

export const HomeCards = () => {
    return (
        <section className='py-4'>
            <div className='container-xl lg:container m-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
                    <Card>
                        <h2 className='text-2xl font-bold'>h2</h2>
                        <p className='mt-2 mb-4'>
                            h2: p </p>
                        <a href='/page.html' className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'>
                            a: className=inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700
                        </a>
                    </Card>
                    <Card bg={'bg-indigo-100'}>
                        <h2 className='text-2xl font-bold'>h2</h2>
                        <p className='mt-2 mb-4'>
                            h2: p </p>
                        <a href='/page.html' className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'>
                            a: className=inline-block bg-indigo-500 text-white rounded-lg px-4 py-2
                            hover:bg-indigo-600
                        </a>
                    </Card>
                </div>
            </div>
        </section>
    )
}