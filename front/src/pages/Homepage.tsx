import { useState, useEffect } from 'react';
import image from '../assets/paige-cody-ITTqjS3UpoY-unsplash.jpg';

const Homepage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
          }, 600); // Délai avant le début du glissement

          return () => clearTimeout(timer); // Nettoyer le timer

    }, []);

    return (
        <div className="border-t-1 border-gray-300">
            <div className="container relative mx-auto p-4 flex flex-col h-11/12 justify-around items-center md:flex-row xl:w-5/6 xl:max-w-6xl">

                <div className="flex flex-col justify-around items-left text-center sm:w-full md:text-left md:h-96 lg:w-3/4">

                    <div className={`-z-1 transform transition-all duration-500 ease-in-out ${ isVisible ? 'translate-x-0 md:translate-y-0 opacity-100' : '-translate-x-full md:translate-x-0 md:translate-y-85 opacity-0' }`}>
                        <p className="font-bold text-lg md:text-sm lg:text-lg">
                            🚀 Meilleure agence web et digitale!
                        </p>

                        <h1 className="font-bold text-4xl my-10 sm:text-4xl md:text-3xl lg:text-4xl lg:my-5">
                            Augmentez vos revenus grâce à un marketing puissant !
                        </h1>

                        <p className="font-bold text-lg md:text-sm lg:text-lg">
                            Un marketing plus puissant, efficace et efficient <br /> pour la croissance de votre entreprise avec Niralys.
                        </p>

                        <div className="w-fill flex flex-col justify-between items-center mx-auto sm:flex-row sm:w-1/2 md:w-3/4 md:mx-0">
                            <button className="bg-custom-navy text-white font-bold py-2 px-4 rounded-full my-4">En savoir plus</button>
                            <button className="border-1 border-custom-navy text-black font-bold py-2 px-4 rounded-full my-4">Nous contacter</button>
                        </div>
                    </div>

                </div>

                <div className="absolute bottom-0 left-0 w-3/5 md:h-20 bg-white"></div>

                <div className="my-10 sm:w-full">
                    <img src={image} alt="Image d'illustration" className={`mx-auto rounded-2xl w-full max-w-lg md:h-96 md:object-cover transform ${ isVisible ? 'transition-transform duration-300 ease-out translate-y-0 opacity-100' : '-translate-y-30 opacity-0'}`}/>
                </div>
            </div>

            <div className="mx-auto h-screen bg-custom-gray">
            </div>
        </div>
    );
}

export default Homepage;