import React from 'react';
// Importing components for React Router
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
//Importing home page component to be used
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';

function App() {
  return (
    // Wrapping entire app with router component, since router ensures entire rendered app is up to date with current URL
    <Router>
      <div className="App">
        <NavBar/>
        {/*  Route component takes in two main props:
       1. a path prop to specify what url we want to render a given component at
       2. a component prop which specifies the actual component we want to render there
       HomePage renders when url is just a slash, /, need to write exact once to tell react router to match exactly */}
        <div id="page-body">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/articles-list" component={ArticlesList} />
          {/* React router need to use URL parameter for specific article pages to show
          ,syntax when defining path use :<variable name>
          when react router sees URL parameter, passes prop to component at that route(articlepage) that tells component the value
          of the section of our url, or string that occupies the :name spot*/}
          <Route path="/article/:name" component={ArticlePage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
