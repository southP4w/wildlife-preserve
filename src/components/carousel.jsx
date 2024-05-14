import { useState, useEffect } from 'react';
const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        {
            name: "Lion",
            imageUrl: "https://images.unsplash.com/photo-1669120180498-652eb656193c?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "The king of the jungle, known for its mane and powerful roar.",
        },
        {
            name: "Turtle",
            imageUrl: "https://images.unsplash.com/photo-1568965081720-a2eadffaa3e4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "smartest animal of them all.",
        },
        {
            name: "Birb",
            imageUrl: "https://images.unsplash.com/photo-1568965081765-3662cf65d6da?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "It has wings and it can fly",
        },
        {
            name: "Alligator",
            imageUrl: "https://images.unsplash.com/photo-1568965081755-82165a0f46ca?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Flordia man's best friend",
        },
        {
            name: "Polar Bear",
            imageUrl: "https://images.unsplash.com/photo-1466477234737-8a3b3faed8c3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Ice Bear sees all",
        },
    ];

    const moveImages = (newIndex) => {
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            moveImages((currentIndex + 1) % images.length);
        }, 5000); // Change 5000 to the desired interval in milliseconds

        return () => clearInterval(interval);
    }, [currentIndex, images.length]);

    return (
        <div className="flex justify-center items-center">
            <div className="shadow-md h-530 w-500 overflow-hidden relative bg-amber-300">
                <div className="flex" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 1s ease-in-out' }}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.imageUrl}
                            alt={`Image ${index + 1}`}
                            className="w-full h-auto object-cover" // Adjust object-fit property to cover
                        />
                    ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4 bg-amber-500">
                    <button className="btn bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded" onClick={() => moveImages(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}>
                        Prev
                    </button>
                    <button className="btn bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded" onClick={() => moveImages((currentIndex + 1) % images.length)}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;







