import './Sidebar.css';

export default function Sidebar() {
    return (
        <aside className="blog-sidebar">
            <section className="sidebar-widget about-widget">
                <h4 className="widget-title">About Me</h4>
                <div className="about-content">
                    <img src="/UIConcepts/BlogFrontEnd.jpg" alt="Author" className="author-avatar" />
                    <p className="author-bio">
                        Traveler, photographer, and storyteller. Join me as I explore the most beautiful corners of our world.
                    </p>
                </div>
            </section>

            <section className="sidebar-widget popular-widget">
                <h4 className="widget-title">Popular Posts</h4>
                <ul className="popular-list">
                    <li className="popular-item">
                        <span className="popular-number">01</span>
                        <a href="#" className="popular-link">Top 10 Hidden Gem Beaches in Thailand</a>
                    </li>
                    <li className="popular-item">
                        <span className="popular-number">02</span>
                        <a href="#" className="popular-link">The Ultimate Packing List for Solo Travelers</a>
                    </li>
                    <li className="popular-item">
                        <span className="popular-number">03</span>
                        <a href="#" className="popular-link">How to Save Money for Your Dream Trip</a>
                    </li>
                </ul>
            </section>

            <section className="sidebar-widget newsletter-widget">
                <h4 className="widget-title">Newsletter</h4>
                <p className="newsletter-text">Subscribe to get travel tips and stories delivered to your inbox.</p>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="Your email address" className="newsletter-input" required />
                    <button type="submit" className="newsletter-btn">Subscribe</button>
                </form>
            </section>
        </aside>
    );
}
