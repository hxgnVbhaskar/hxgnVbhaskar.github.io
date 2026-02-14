import './About.css';

export default function About() {
    return (
        <div className="about-page container">
            <div className="about-layout">
                <div className="about-image-section">
                    <img src="/UIConcepts/BlogFrontEnd.jpg" alt="About Wanderer" className="about-hero-image" />
                </div>

                <div className="about-content-section">
                    <h1 className="about-title">About Mantavya</h1>
                    <p className="about-lead">
                        Mantavya is my commentary on topics which are of interest to me and my audience. It will be a straightforward and honest blog. Here I share my thoughts and experiences on a wide range of topics.
                    </p>
                    <p className="about-text">
                        Welcome to Mantavya. My name is Vidyut Bhaskar, and I've been a Industry Consultant and an Engineer from heart. I always feel world need better Scientists and Engineers who are human at heart to make the world a better place.
                    </p>
                    <p className="about-text">
                        Through this blog, I aim to share not just the "where" and "how" of topics, but the "why". My guides are designed to help you find the hidden gems, eat like a local, and travel in a way that is respectful and sustainable.
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
