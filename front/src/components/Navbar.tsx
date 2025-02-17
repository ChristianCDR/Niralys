import { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);

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
        <nav className="">
            <div className="flex flex-row sm:border-b-1 border-gray-300 min-w-full justify-between sm:justify-around items-center p-4">
                <div>
                    <a href="/" className="flex flex-row">
                        <img src="/vite.svg" alt="Logo Niralys" />
                        <span className="mx-2 text-black text-lg font-bold">Niralys</span>
                    </a>
                </div>
                
                <div className="sm:hidden" onClick={() => toggleDrawer()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><path fill="currentColor" d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"></path></svg>
                </div>

                <div className="hidden sm:block w-1/2">
                    {returnList("flex flex-row justify-around items-left p-4 text-sm text-black font-bold")}
                </div>
            </div>
             
            <div className={`fixed right-0 h-full w-full bg-white transform transition-all duration-800 ease-in-out ${ open ? 'translate-x-0' : 'translate-x-full' }`}>
                {returnList("flex flex-col justify-around items-left p-4 text-sm text-black font-bold")}
            </div>
            
        </nav>
    );
}

export default Navbar;