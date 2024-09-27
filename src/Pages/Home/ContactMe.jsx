export default function ContactMe() {
    return (
        <section id="Contact" className="contact--section">
            <div>
                <h2>Kontakt Meg</h2>
            </div>
            <form className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">Fornavn</span>
                        <input 
                        type="text" 
                        className="contact--input text-md" 
                        name="first-name"
                        id="first-name"
                        required
                        />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Etternavn</span>
                        <input 
                        type="text" 
                        className="contact--input text-md" 
                        name="last-name"
                        id="last-name"
                        required
                        />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">E-post</span>
                        <input 
                        type="email" 
                        className="contact--input text-md" 
                        name="email"
                        id="email"
                        required
                        />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Telefonnummer</span>
                        <input 
                        type="number" 
                        className="contact--input text-md" 
                        name="phone-number"
                        id="phone-number"
                        required
                        />
                    </label>
                </div>
                <label htmlFor="choose-topic" className="contact--label">
                    <span className="text-md">Velg et emne</span>
                    <select id="choose-topic" className="contact--input text-md">
                        <option>Velg Ett...</option>
                        <option>Item 1</option>
                        <option>Item 2</option>
                        <option>Item 3</option>
                    </select>
                </label>
                <label htmlFor="message" className="contact--label">
                    <span className="text-md">Melding</span>
                    <textarea
                       className="contact--input text-md" 
                       id="message"
                       rows="8"
                       placeholder="Skriv din melding..."
                    />
                </label>
                <label htmlFor="checkbox" className="checkbox--label">
                    <input type="checkbox" required name="checkbox" id="checkbox" />
                    <span className="text-sm">Jeg aksepterer betingelsene</span>
                </label>
                <div>
                    <button className="btn btn-primary contact--form--btn">Send inn</button>
                </div>
            </form>
        </section>
    );
}