import { useState, useEffect } from 'react';
import PostCard from '../../components/PostCard/PostCard';
import './Blog.css';

export default function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/data/articles.json')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.error('Error loading posts:', err));
    }, []);

    return (
        <div className="blog-page container">
            <header className="page-header text-center">
                <h1 className="page-title">Wanderer's Journal</h1>
                <p className="page-subtitle">A collection of stories, guides, and moments from around the globe.</p>
            </header>

            <div className="posts-grid">
                {posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}
