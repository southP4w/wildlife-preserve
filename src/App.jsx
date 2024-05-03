const App = () => {
    return (
        <>
            <nav className="bg-indigo-700 border-b border-indigo-500">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <div
                            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                        >
                            <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
                                <img
                                    className="h-10 w-auto"
                                    src="images/logo.png"
                                    alt="alt=Site Logo"
                                />
                                <span className="hidden md:block text-white text-2xl font-bold ml-2"
                                >Preservation Name</span
                                >
                            </a>
                            <div className="md:ml-auto">
                                <div className="flex space-x-2">
                                    <a
                                        href="/index.html"
                                        className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                                    >Home</a
                                    >
                                    <a
                                        href="/page.html"
                                        className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                                    >Link 01</a
                                    >
                                    <a
                                        href="/page.html"
                                        className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                                    >Link 02</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <section className="bg-indigo-700 py-20 mb-4">
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
                >
                    <div className="text-center">
                        <h1
                            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
                        >
                            h1
                        </h1>
                        <p className="my-4 text-xl text-white">
                            h1: p
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-4">
                <div className="container-xl lg:container m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold">h2</h2>
                            <p className="mt-2 mb-4">
                                h2: p
                            </p>
                            <a
                                href="/page.html"
                                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                            >
                                a: className=inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700
                            </a>
                        </div>
                        <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold">h2</h2>
                            <p className="mt-2 mb-4">
                                h2: p
                            </p>
                            <a
                                href="/page.html"
                                className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                            >
                                a: className=inline-block bg-indigo-500 text-white rounded-lg px-4 py-2
                                hover:bg-indigo-600
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        h2
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl shadow-md relative">
                            <div className="p-4">
                                <div className="mb-6">
                                    <div className="text-gray-600 my-2">div: className=text-gray-600 my-2</div>
                                    <h3 className="text-xl font-bold">h3: className=text-xl font-bold</h3>
                                </div>
                                <div className="mb-5">
                                    div: className=mb-5
                                </div>
                                <h3 className="text-indigo-500 mb-2">h3: className=text-indigo-500 mb-2</h3>
                                <div className="border border-gray-100 mb-5"></div>
                                <div className="flex flex-col lg:flex-row justify-between mb-4">
                                    <div className="text-orange-700 mb-3">
                                        <i className="fa-solid fa-location-dot text-lg"></i>
                                        div: className=text-orange-700 mb-3
                                    </div>
                                    <a
                                        href="page.html"
                                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md relative">
                            <div className="p-4">
                                <div className="mb-6">
                                    <div className="text-gray-600 my-2">div: className=text-gray-600 my-2</div>
                                    <h3 className="text-xl font-bold">h3: className=text-xl font-bold</h3>
                                </div>
                                <div className="mb-5">
                                    div: className=mb-5
                                </div>
                                <h3 className="text-indigo-500 mb-2">h3: className=text-indigo-500 mb-2</h3>
                                <div className="border border-gray-100 mb-5"></div>
                                <div className="flex flex-col lg:flex-row justify-between mb-4">
                                    <div className="text-orange-700 mb-3">
                                        <i className="fa-solid fa-location-dot text-lg"></i>
                                        div: className=text-orange-700 mb-3
                                    </div>
                                    <a href="page.html"
                                       className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                                    >Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md relative">
                            <div className="p-4">
                                <div className="mb-6">
                                    <div className="text-gray-600 my-2">div: className=text-gray-600 my-2</div>
                                    <h3 className="text-xl font-bold">h3: className=text-xl font-bold</h3>
                                </div>
                                <div className="mb-5">
                                    div: className=mb-5
                                </div>
                                <h3 className="text-indigo-500 mb-2">h3: className=text-indigo-500 mb-2</h3>
                                <div className="border border-gray-100 mb-5"></div>
                                <div className="flex flex-col lg:flex-row justify-between mb-4">
                                    <div className="text-orange-700 mb-3">
                                        <i className="fa-solid fa-location-dot text-lg"></i>
                                        div: className=text-orange-700 mb-3
                                    </div>
                                    <a
                                        href="page.html"
                                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="m-auto max-w-lg my-10 px-6">
                <a
                    href="page.html"
                    className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
                >More/View All</a
                >
            </section>
        </>
    )
}
export default App