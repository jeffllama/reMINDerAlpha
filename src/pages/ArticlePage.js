import React from 'react';
import articleContent from './article-content';

// Article Page, should show specific articles
// Need to use URL parameters
// React router passes match prop (match prop contains current url and if it matches route path, and property params(name parameter))
const ArticlePage = ({ match }) => {
    // pulling url parameter name out of match
    const name = match.params.name;
    // article page component has access to whatever name we put in url, now need to find article from articles array that has that name
    // find article whose name is equal to the name property we get from url parameters
    const article = articleContent.find(article => article.name === name);
    
    if (!article) return <h1>Article does not exist</h1>
    
    return (
        <>
            {/* i.e. if we typed in local host, /article/<any name> i.e. /learn-react, heading will correct show string we wrote (learn-react) 
    our article page component now has access to url parameter and can change itself accordingly*/}
            {/* <h1> This is the {name} article </h1> */}

            {/*Finally convert article info into JSX
heading just displays article title property */}
            <h1>{article.title}</h1>
            {/* Map articles content property to a bunch of JSX elements */}
            {article.content.map((paragraph, key )=> (
                <p key ={key}>{paragraph}</p>
            ))}
        </>
    );
}

// Exporting the homePage component so it can be used by app.js
export default ArticlePage;