const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center p-4 bg-dark-blue text-white text-center xl:text-left xl:h-126">
            <div className="flex flex-col justify-around items-center mb-3 border-b-1 md:flex-row xl:h-11/12 xl:w-5/6 xl:max-w-8xl">
                <ul className="flex flex-col justify-around items-center xl:items-start text-white h-56">
                    <li className="font-bold text-xl">
                        <a href="/" className="flex flex-row">
                            <img src="/vite.svg" alt="Logo Niralys"/>
                            <span className="mx-2 text-white text-2xl font-bold">Niralys</span>
                        </a>
                    </li>
                    <li className="flex flex-row items-center">
                        <a href="/" className="flex flex-row justify-around items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="mt-1"><path fill="currentColor" d="M10 2.009c-2.762 0-5 2.229-5 4.99c0 4.774 5 11 5 11s5-6.227 5-11c0-2.76-2.238-4.99-5-4.99m0 7.751a2.7 2.7 0 1 1 0-5.4a2.7 2.7 0 0 1 0 5.4"/></svg>
                            <span className="">5 Rue du Faubourg Montmartre, Paris</span>
                        </a>
                    </li>
                    <li className="flex flex-row items-center">
                        <a href="/" className="flex flex-row justify-around items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/></svg>
                            <span className="ml-2">01 23 34 56 78</span>
                        </a>
                    </li>
                    <li className="flex flex-row items-center">
                        <a href="/" className="flex flex-row justify-around items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/></svg>
                            <span className="ml-2">contact@niralys.fr</span> 
                        </a>   
                    </li>
                    <li className="flex flex-row justify-between w-1/2 items-center">
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512"><path fill="currentColor" d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z"/></svg>
                        </a>
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><g fill="none"><path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M34 6H14a8 8 0 0 0-8 8v20a8 8 0 0 0 8 8h20a8 8 0 0 0 8-8V14a8 8 0 0 0-8-8Z"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M24 32a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z"/><path fill="currentColor" d="M35 15a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/></g></svg>
                        </a>
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M13.387 7.32c0-.788.174-1.187 1.398-1.187h1.535V3.2h-2.347c-2.933 0-4.106 1.957-4.106 4.107v1.76H7.52V12h2.347v8.8h3.52V12h2.585l.348-2.933h-2.933z"/></svg>
                        </a>
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"/></svg>
                        </a>
                    </li>
                </ul>

                <ul className="flex flex-col justify-around text-white mt-5 h-56">
                    <li className="font-bold text-xl">Développement Web</li>
                    <li>Création de site e-commerce</li>
                    <li>Création de site vitrine</li>
                    <li>Refonte de site internet</li>
                    <li>Maintenance de site internet</li>
                </ul>

                <ul className="flex flex-col justify-around text-white mt-5 h-56">
                    <li className="font-bold text-xl">Marketing Digital</li>
                    <li>Marketing SEO</li>
                    <li>Marketing SEA</li>
                    <li>Marketing Réseaux sociaux</li>
                    <li>Marketing de contenu</li>
                </ul>

                <ul className="flex flex-col justify-around text-white mt-5 h-56">
                    <li className="font-bold text-xl">Ressources</li>
                    <li>À propos</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>FAQ</li>
                </ul>
            </div>

            <p>Copyright © 2025 - Niralys tous droits réservés - Mentions légales - CGV</p>
        </div>
    )
}

export default Footer;