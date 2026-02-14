import './Footer.css';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <div className="footer-brand">
                    <h2 className="footer-logo">Mantavya - Bhaskar</h2>
                    <p className="footer-tagline">Science & Technology | Creativity | Spirituality | Humanity</p>
                </div>

                <div className="footer-social">
                    <a href="#" className="social-link" title="Instagram">Instagram</a>
                    <a href="#" className="social-link" title="Twitter">Twitter</a>
                    <a href="#" className="social-link" title="Pinterest">Pinterest</a>
                </div>

                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} Mantavya - Bhaskar Commentaries. All rights reserved.</p>
                    <p className="designer-credit">Published by passion to document the world around us<a href="https://github.com/yourusername">Your Name</a>.</p>
                </div>
            </div>
        </footer>
    );
}
