import { useState, useEffect, useRef } from 'react';
import image from '../assets/images/social-media-marketing-concept-marketing-with-applications.jpg';
import teamWork from '../assets/images/austin-distel-mpN7xjKQ_Ns-unsplash.jpg';
import Cards from '../components/Cards';

const Homepage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [visibleSections, setVisibleSections] = useState<string[]>([]);
    const sectionRefs = useRef<(HTMLDivElement | null) []>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 600); // Délai avant le début du glissement

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    setVisibleSections((prevSections) => [...prevSections, sectionId]);
                }
            })
        }, { threshold: 0.5 });

        sectionRefs.current.forEach((section) => {
            if (section) {
                observer.observe(section);
            }
        })

        return () => {
            clearTimeout(timer); // Nettoyer le timer

            sectionRefs.current.forEach((section) => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        }

    }, []);

    const cardInfos = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" className="fill-white m-4"><path d="M9.825 17.527a.11.11 0 0 1-.107-.142l3.05-10.837a.11.11 0 0 1 .108-.081H14.2a.11.11 0 0 1 .107.141l-3.063 10.838a.11.11 0 0 1-.107.08H9.825Zm-2.146-2.732a.1.1 0 0 1-.079-.033l-2.667-2.704a.11.11 0 0 1 0-.156L7.6 9.211a.1.1 0 0 1 .08-.033h1.702c.1 0 .149.12.079.19l-2.534 2.534a.11.11 0 0 0 0 .157l2.535 2.546c.07.07.02.19-.079.19zm6.954 0a.111.111 0 0 1-.079-.19l2.525-2.546a.11.11 0 0 0 0-.157l-2.524-2.535a.111.111 0 0 1 .079-.19h1.692q.047.001.078.034l2.68 2.69a.11.11 0 0 1 0 .157l-2.68 2.704a.1.1 0 0 1-.078.033zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12s-5.383 12-12 12m0-22.667C6.118 1.333 1.333 6.118 1.333 12S6.118 22.667 12 22.667S22.667 17.882 22.667 12S17.882 1.333 12 1.333"/></svg>,
            title: 'Création de site internet',
            description: 'Notre agence de création de site web est spécialisée dans le développement de sites corporate sous WordPress.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="fill-white m-4"><path d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"/></svg>,
            title: 'Création de site e-commerce',
            description: 'Notre agence web est spécialisée dans la création de site e-commerce avec PrestaShop et Shopify.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" className="fill-white m-4"><path d="M14.287.303a1 1 0 1 1 1.415 1.414l-.707.708L13.58 1.01zm0 2.829l-6.873 6.873H6V8.59l6.873-6.874zM3 13.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h6.25a.75.75 0 0 0 0-1.5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6.75a.75.75 0 0 0-1.5 0V13a.5.5 0 0 1-.5.5z" clip-rule="evenodd"/></svg>,
            title: 'Refonte de site internet',
            description: 'Donnez un nouveau souffle à votre site internet pour de meilleures performances et une expérience utilisateur optimale.'
        }

    ];

    return (
        <div className="border-t-1 border-gray-300">
            <div className="container relative mx-auto p-4 flex flex-col h-11/12 justify-around items-center md:flex-row xl:w-5/6 xl:max-w-6xl"
                id="section1" 
                ref={(el) => { sectionRefs.current[0] = el }}
            >

                <div className="flex flex-col justify-around items-left text-center sm:w-full md:text-left md:h-96 lg:w-3/4">

                    <div className={`-z-1 transform transition-all duration-500 ease-in-out ${ isVisible ? 'translate-x-0 md:translate-y-0 opacity-100' : '-translate-x-full md:translate-x-0 md:translate-y-85 opacity-0' }`}>
                        <p className="text-lg md:text-sm lg:text-lg">
                            🚀 Meilleure agence web et digitale!
                        </p>

                        <h1 className="font-bold text-4xl text-dark-blue my-10 sm:text-4xl md:text-3xl lg:text-4xl lg:my-5">
                            Augmentez vos revenus grâce à un marketing puissant !
                        </h1>

                        <p className="text-lg md:text-sm lg:text-lg">
                            Un marketing plus puissant, efficace et efficient pour la croissance de votre entreprise avec Niralys.
                        </p>

                        <div className="w-fill flex flex-col justify-between items-center mx-auto sm:flex-row sm:w-1/2 md:w-3/4 md:mx-0">
                            <button className="bg-dark-blue text-white py-2 px-4 my-4 p-2 rounded-xl shadow-lg shadow-dark-blue/40">En savoir plus</button>
                            <button className="border-1 border-dark-blue text-black py-2 px-4 my-4 p-2 rounded-xl shadow-lg shadow-dark-blue/40">Nous contacter</button>
                        </div>
                    </div>

                </div>

                <div className="absolute bottom-0 left-0 w-3/5 md:h-20 bg-white"></div>

                <div className="my-10 sm:w-full">
                    <img src={image} alt="Image d'illustration" className={`mx-auto rounded-xl w-full max-w-lg shadow-lg shadow-dark-blue/50 md:h-96 md:object-cover transform ${ isVisible ? 'transition-transform duration-300 ease-out translate-y-0 opacity-100' : '-translate-y-30 opacity-0'}`}/>
                </div>
            </div>

            <div id="section2" className="text-dark-blue p-4">
                {/* Nos partenaires */}
            </div>

            <div className="bg-dark-blue text-white p-4"
                id="section3"
                ref={(el) => { sectionRefs.current[2] = el }}
            >
                <div className="mx-auto flex flex-col justify-around items-center md:flex-row-reverse md:justify-around xl:w-5/6 xl:max-w-6xl">
                    <div className="m-5 text-center md:text-left">
                        <h2 className="font-bold text-4xl my-5">L'agence Niralys</h2>
                        <p className="font-medium my-5">Avec près de 10 ans d’expérience, Beyonds est reconnue pour son expertise en développement de solutions digitales sur-mesure.</p>
                        <p className="font-medium mt-5">Grâce à notre expertise et notre réactivité, nous avons établi une relation de confiance durable avec l’ensemble de nos clients.</p>
                    </div>

                    <div className="my-10 sm:w-full">
                        <img src={teamWork} alt="Illustration travail d'équipe" className="mx-auto rounded-xl w-full max-w-lg h-96 object-cover shadow-lg shadow-gray-400/60"/>
                    </div>
                </div>
            </div>

            <div className="mx-auto p-4 mb-10 xl:w-5/6 xl:max-w-8xl"
                id="section4"
                ref={(el) => { sectionRefs.current[3] = el }}
            >
                <h2 className="font-bold text-4xl my-5 text-dark-blue text-center sm:text-4xl md:text-left">Notre mission</h2>
                <div className="flex flex-col justify-around md:h-65">
                    <div className="flex flex-col justify-around items-center h-96 md:flex-row">
                        <div className="w-64 flex flex-row justify-around items-center p-2 rounded-xl shadow-lg shadow-dark-blue/40">
                            <svg xmlns="http://www.w3.org/2000/svg" width={64}height={64}viewBox="0 0 24 24" className="fill-dark-blue"><path d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
                            <p className="w-2/3">Développer votre présence en ligne</p>
                        </div>
                        <div className="w-64 flex flex-row justify-around items-center p-2 rounded-xl shadow-lg shadow-dark-blue/40">
                            <svg xmlns="http://www.w3.org/2000/svg" width={64}height={64}viewBox="0 0 64 64" className="fill-dark-blue"><path d="M55.217 8.782c-9.044-9.043-23.708-9.043-32.752 0c-8.4 8.402-8.985 21.645-1.779 30.735l-1.893 1.893l-1.572-1.572L4.376 52.682c-.754-.479-1.335-.684-1.572-.445l-.703.701C.958 54.081 9.919 63.044 11.062 61.9l.703-.702c.238-.237.031-.819-.446-1.575L24.163 46.78l-1.573-1.572l1.894-1.892c9.091 7.207 22.331 6.621 30.734-1.78c9.042-9.045 9.044-23.708-.001-32.754m-2.729 30.024c-7.538 7.536-19.757 7.538-27.293 0c-7.537-7.535-7.537-19.758 0-27.293c7.534-7.537 19.757-7.537 27.293 0s7.534 19.756 0 27.293"/><path d="M55.317 23.902a16.6 16.6 0 0 1-3.789 5.879c-6.513 6.514-17.076 6.514-23.592-.003a16.6 16.6 0 0 1-4.813-10.243c-2.256 5.949-1 12.926 3.79 17.716c6.515 6.515 17.078 6.515 23.593 0c3.654-3.651 5.255-8.577 4.811-13.349"/></svg>
                            <p className="w-2/3">Améliorer votre visibilité</p>
                        </div>
                        <div className="w-64 flex flex-row justify-around items-center p-2 rounded-xl shadow-lg shadow-dark-blue/40">
                            <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 24 24" className="fill-dark-blue"><path d="M4 2v18h18v2H2V2zm17.914 6L15.5 14.414l-4-4l-5 5L5.086 14L11.5 7.586l4 4l5-5z"/></svg>
                            <p className="w-2/3">Booster vos ventes en ligne</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-around items-center h-62 md:flex-row md:w-3/4 mx-auto">
                        <div className="w-64 flex flex-row justify-around items-center p-2 rounded-xl shadow-lg shadow-dark-blue/40">
                            <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 16 16" className="fill-dark-blue"><path fill-rule="evenodd" d="M13.293 0c.39 0 .707.317.707.707V2h1.293a.707.707 0 0 1 .5 1.207l-1.46 1.46A1.14 1.14 0 0 1 13.53 5h-1.47L8.53 8.53a.75.75 0 0 1-1.06-1.06L11 3.94V2.47c0-.301.12-.59.333-.804l1.46-1.46a.7.7 0 0 1 .5-.207M2.5 8a5.5 5.5 0 0 1 6.598-5.39a.75.75 0 0 0 .298-1.47A7 7 0 1 0 14.86 6.6a.75.75 0 0 0-1.47.299q.109.533.11 1.101a5.5 5.5 0 1 1-11 0m5.364-2.496a.75.75 0 0 0-.08-1.498A4 4 0 1 0 11.988 8.3a.75.75 0 0 0-1.496-.111a2.5 2.5 0 1 1-2.63-2.686" clip-rule="evenodd"/></svg>
                            <p className="w-2/3">Captiver votre audience</p>
                        </div>
                        <div className="w-64 flex flex-row justify-around items-center p-2 rounded-xl shadow-lg shadow-dark-blue/40">
                            <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 20 20" className="fill-dark-blue"><path fill-rule="evenodd" d="M6 0h9c1.105 0 2 .943 2 2.105v15.79C17 19.057 16.105 20 15 20H6c-1.105 0-2-.943-2-2.105V2.105C4 .943 4.895 0 6 0m1 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-1v1.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V2z" clip-rule="evenodd"/></svg>
                            <p className="w-2/3">Animer vos réseaux sociaux avec efficacité</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto p-4 h-screen xl:w-5/6 xl:max-w-8xl"
                id="section5"
                ref={(el) => { sectionRefs.current[3] = el }}
            >
                <h2 className="font-bold text-4xl my-5 text-dark-blue text-center sm:text-4xl md:text-left">Découvrez nos domaines d'expertise</h2>
                <div className="flex flex-col justify-around items-center h-96 md:flex-row">
                    <Cards icon={cardInfos[0].icon} title={cardInfos[0].title} description={cardInfos[0].description}  />
                    <Cards icon={cardInfos[1].icon} title={cardInfos[1].title} description={cardInfos[1].description}  />
                    <Cards icon={cardInfos[2].icon} title={cardInfos[2].title} description={cardInfos[2].description}  />
                </div>
                <div className="flex flex-col justify-around items-center h-96 md:flex-row">
                    <Cards icon={cardInfos[0].icon} title={cardInfos[0].title} description={cardInfos[0].description}  />
                    <Cards icon={cardInfos[1].icon} title={cardInfos[1].title} description={cardInfos[1].description}  />
                    <Cards icon={cardInfos[2].icon} title={cardInfos[2].title} description={cardInfos[2].description}  />
                </div>
            </div>  
        </div>
    );
}

export default Homepage;