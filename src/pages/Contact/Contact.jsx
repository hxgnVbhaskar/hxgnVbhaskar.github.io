import './Contact.css';

export default function Contact() {
    return (
        <div className="contact-page container">
            <header className="page-header text-center">
                <h1 className="page-title">Get in Touch</h1>
                <p className="page-subtitle">Have a question? Interested in a collaboration? Or just want to say hello?</p>
            </header>

            <div className="contact-layout">
                <div className="contact-info">
                    <div className="info-item">
                        <h4>Location</h4>
                        <p>Based in the beautiful San Francisco, but often found somewhere in the Himalayas.</p>
                    </div>
                    <div className="info-item">
                        <h4>Email</h4>
                        <p>hello@wandererjournal.com</p>
                    </div>
                    <div className="info-item">
                        <h4>Follow Me</h4>
                        <div className="contact-social">
                            <a href="#">Instagram</a>
                            <a href="#">Twitter</a>
                            <a href="#">Pinterest</a>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Your email address" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" placeholder="What's this about?" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" placeholder="How can I help you?" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    );
}
