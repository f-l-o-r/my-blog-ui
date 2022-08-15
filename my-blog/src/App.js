import React from 'react';
import HomePage from './pages/Home';
import AboutPage from './pages/AboutPage';
import ArticleList from './pages/ArticlesList';
import ActiclePage from './pages/ArticlePage';
import NavBar from './elements/NavBar';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/arcticles-list" element={<ArticleList />} />
        <Route path="/arcticles/:name" element={<ActiclePage />} />
      </Routes>
    </Router>

  );
}

export default App;
