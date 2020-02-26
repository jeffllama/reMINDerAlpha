import React from 'react';
import { Link } from 'react-router-dom';
import articleContent from './article-content';

const ArticlesList = () => (
    <>
    <h1>Articles</h1>
    {/* For each article */}
    {articleContent.map((article, key) => (
        // List the article title, and using link component, link each article to the article page
        <Link className="article-list-item" key={key} to={`/article/${article.name}`}>
            <h3>{article.title}</h3>
            {/* Showing first 150 characters for users to see what article is about */}
            <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
    ))}
    </>
);

export default ArticlesList;