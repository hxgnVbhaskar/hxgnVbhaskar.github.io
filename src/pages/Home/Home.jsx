import { useState, useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import PostCard from '../../components/PostCard/PostCard';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.css';

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/data/articles.json')
            .then(res => res.json())
            .then(data => setPosts(data.slice(0, 3))) // Show top 3 on home
            .catch(err => console.error('Error loading posts:', err));
    }, []);

    return (
        <div className="home-page">
            <Hero />

            <div className="container main-content mt-2">
                <div className="content-grid">
                    <main className="posts-section">
                        <h2 className="section-title">Latest Stories</h2>
                        <div className="posts-list">
                            {posts.map(post => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>
                    </main>

                    <Sidebar />
                </div>
            </div>
        </div>
    );
}
