import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const DynamicTitle = () => {
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                document.title = "Accueil - Niralys";
                break;
            case '/about':
                document.title = "À propos - Niralys";
                break;
            case '/contact':
                document.title = "Contact - Niralys";
                break;
            default:
                document.title = "Niralys";
        }
    }, [location]);

    return null;
};

export default DynamicTitle;