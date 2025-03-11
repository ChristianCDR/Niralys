import { useState, useEffect } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [playAnimation, setPlayAnimation] = useState(false);

    useEffect(() => {
        setPlayAnimation(true);
    }, []);

    const toggleDrawer = () => {
        setOpen(!open);
    }

    const returnList = (classList : string) => {
        return (
            <ul className={classList}>
                <li className="my-2">
                    <a className="active" aria-current="page" href="/">Accueil</a>
                </li>
                <li className="my-2">
                    <a className="" href="/services">Nos services</a>
                </li>
                <li className="my-2">
                    <a className="" href="/about">À propos</a>
                </li>
                <li className="my-2">
                    <a className="" href="/blog">Blog</a>
                </li>
                <li className="my-2">
                    <a className="" href="/contact">Contactez-nous</a>
                </li>
                <li className="my-2">
                    <a className="" href="/faq">FAQ</a>
                </li>
            </ul>
        )
    }

    return (
        <nav className="container mx-auto">
            <div className={`flex flex-row justify-between items-center p-4 transform transition-all duration-500 ease-in-out ${ playAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-10' }`}>
                <div>
                    <a href="/" className="flex flex-row">
                        <img src="/vite.svg" alt="Logo Niralys" />
                        <span className="mx-2 text-black text-lg font-bold">Niralys</span>
                    </a>
                </div>
                
                <div className="lg:hidden" onClick={() => toggleDrawer()}>
                    { !open ? <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><path fill="currentColor" d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 15 15"><path fill="currentColor" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"/></svg>
                    }
                </div>

                <div className="hidden lg:block w-1/2">
                    {returnList("flex flex-row justify-around items-left p-4 text-sm text-black font-bold")}
                </div>
            </div>
             
            <div className={`fixed z-1 right-0 h-full w-full bg-white transform transition-all duration-800 ease-in-out ${ open ? 'translate-x-0' : 'translate-x-full' }`}>
                {returnList("flex flex-col justify-around items-left p-4 text-sm text-black")}
            </div>
            
        </nav>
    );
}

export default Navbar;