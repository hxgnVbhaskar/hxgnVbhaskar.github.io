import './About.css';

export default function About() {
    return (
        <div className="about-page container">
            <div className="about-layout">
                <div className="about-image-section">
                    <img src="/UIConcepts/BlogFrontEnd.jpg" alt="About Wanderer" className="about-hero-image" />
                </div>

                <div className="about-content-section">
                    <h1 className="about-title">About the Wanderer</h1>
                    <p className="about-lead">
                        I believe that travel is more than just seeing new places; it's about shifting your perspective and discovering who you are when you're away from the familiar.
                    </p>
                    <p className="about-text">
                        Welcome to Wanderer's Journal. My name is Mantavya, and I've been traveling the world for over a decade. What started as a gap year adventure turned into a lifelong passion for storytelling and photography.
                    </p>
                    <p className="about-text">
                        Through this blog, I aim to share not just the "where" and "how" of travel, but the "why". My guides are designed to help you find the hidden gems, eat like a local, and travel in a way that is respectful and sustainable.
                    </p>

                    <div className="about-stats mt-2">
                        <div className="stat-item">
                            <span className="stat-number">40+</span>
                            <span className="stat-label">Countries</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">200+</span>
                            <span className="stat-label">Stories</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">10k+</span>
                            <span className="stat-label">Community</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
