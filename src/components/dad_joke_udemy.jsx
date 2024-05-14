import { useState, useEffect } from 'react';

const DadJoke = () => {
    const [joke, setJoke] = useState(""); // Define joke state

    // Function to generate a joke
    const generateJoke = async () => {
        const config = {
            headers: {
                Accept: 'application/json',
            },
        }

        const res = await fetch('https://icanhazdadjoke.com', config)
        const data = await res.json()

        setJoke(data.joke);
    }

    useEffect(() => {
        // Call the function to generate a joke initially
        generateJoke();
    }, []);

    return (
        <div className="container mx-auto py-12 px-4">
            <div className="max-w-xl mx-auto">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="p-4">
                        <h1 className="text-4xl font-extrabold text-center tracking-tight leading-tight mb-8">Wanna hear a Joke? 😄🐰🌙</h1>
                        <div className="mb-4 text-center">
                            <img src=" https://media.tenor.com/JL0YrycH2gkAAAAj/peach-goma-crate-orange.gif " alt=" Cat gif" className="mx-auto mb-4" />
                            <div className="joke mb-4">{joke}</div>
                        </div>
                        <button className="btn bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mx-auto block" onClick={generateJoke}>
                            Get Another Joke 😄
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};









export default DadJoke;
