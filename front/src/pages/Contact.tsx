import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import teamWork from '../assets/images/austin-distel-mpN7xjKQ_Ns-unsplash.jpg';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center bg-cover bg-(position:--my-bg-position) relative h-96"
                style={{backgroundImage: `url(${teamWork})`}}
            >
                <div className="absolute backdrop-grayscale h-full w-full"></div>
                <h1 className="text-6xl sm:text-8xl text-white text-center font-bold z-1 p-2"><span className="lg:border-b-12 lg:border-white">Nous </span>contacter</h1>
            </div>
            <ContactForm />
            <Footer />
        </div>
    );
};
export default Contact;