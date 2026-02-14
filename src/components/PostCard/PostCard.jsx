import { Link } from 'react-router-dom';
import './PostCard.css';

export default function PostCard({ post }) {
    return (
        <article className="post-card">
            <div className="card-image-wrapper">
                <img src={post.image} alt={post.title} className="card-image" />
                <div className="card-category">{post.category}</div>
            </div>

            <div className="card-content">
                <h3 className="card-title">
                    <Link to={`/article/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="card-excerpt">{post.excerpt}</p>

                <Link to={`/article/${post.id}`} className="read-more-btn">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </Link>
            </div>
        </article>
    );
}
