import {Navbar} from "./components/Navbar.jsx";
import {Hero} from "./components/Hero.jsx";
import {HomeCards} from "./components/HomeCards.jsx";
// import {PassListings} from "./components/PassListings.jsx";

const App = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <HomeCards/>
            {/*<PassListings/>*/}

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
