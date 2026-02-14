import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Article.css';

export default function Article() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data/articles.json')
            .then(res => res.json())
            .then(data => {
                const found = data.find(a => a.id === id);
                setArticle(found);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error loading article:', err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="container mt-2">Loading...</div>;
    if (!article) return <div className="container mt-2">Article not found. <Link to="/blog">Back to Blog</Link></div>;

    return (
        <article className="article-page container mb-2">
            <div className="article-layout">
                <main className="article-main">
                    <header className="article-header">
                        <div className="article-meta">
                            <span className="article-category">{article.category}</span>
                            <span className="article-date">{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <h1 className="article-title">{article.title}</h1>
                        <div className="article-author">
                            <span className="author-name">By {article.author}</span>
                        </div>
                    </header>

                    <img src={article.image} alt={article.title} className="article-hero-image" />

                    <div
                        className="article-body"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    <footer className="article-footer">
                        <div className="article-tags">
                            {article.tags.map(tag => (
                                <span key={tag} className="tag">#{tag}</span>
                            ))}
                        </div>
                    </footer>
                </main>

                <Sidebar />
            </div>
        </article>
    );
}
