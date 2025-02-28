import { ReactNode } from "react";

type Props = {
    icon: ReactNode,
    title: string,
    description: string
}

const Cards = ({icon, title, description}:  Props ) => {
    return (
        <div className={`flex flex-col justify-around items-center sm:w-sm h-80 text-center mb-8 p-2 rounded-xl shadow-lg shadow-dark-blue/50 transform ${icon ? 'transition-all duration-500 ease-in-out hover:scale-105 translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="rounded-2xl bg-light-blue">
                {icon}
            </div>
            <h3 className="text-2xl font-bold"> {title} </h3>
            <p> {description} </p>
        </div>        
    );
}

export default Cards;