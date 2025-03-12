const ContactForm = () => {
    return (
        <div className="container mx-auto p-4 border">
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first-name">
                            Prénom*
                        </label>
                        <input className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first-name" type="text" placeholder="Jean"/>
                        <p className="text-red-500 text-xs italic">Veuillez remplir ce champ.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last-name">
                            Nom*
                        </label>
                        <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last-name" type="text" placeholder="Dupont"/>
                    </div>

                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email-address">
                            Email*
                        </label>
                        <input className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email-address" type="email" placeholder="Email"/>
                        <p className="text-red-500 text-xs italic">Veuillez remplir ce champ.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="telephone">
                            Téléphone
                        </label>
                        <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="telephone" type="tel" placeholder="Téléphone"/>
                    </div>

                    <div className="w-full md:w-1/2 px-3">
                        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="company">
                            Société
                        </label>
                        <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="company" type="text" placeholder="Société"/>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                            Votre message*
                        </label>
                        <textarea name="message" id="message" placeholder="&nbsp;Décrivez votre projet" className="w-sm h-56 border rounded-xl"></textarea>
                        <p className="text-xs italic text-right w-sm">0/2000</p>
                    </div>

                </div>
            </form>
        </div>
    );
};
export default ContactForm;