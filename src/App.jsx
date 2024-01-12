import { Routes, Route, Router } from 'react-router-dom';
import React from 'react';

import './App.css';
import NavBar from './components/Navbar';
import VerifyForm from './components/VerifyForm';
import EditForm from './components/editForm';
import Home from './pages/home';
import About from './pages/about';
import Academics from './pages/academics';
import Contact from './pages/contact';
import Administration from './pages/administration';
import VMC from './pages/vmc';
import Footer from './components/Footer';
import Research from './pages/research';
import MemberForm from './components/MemberForm';
import UserPage from './pages/userDashboard';
import ArticleIssue from './components/ArticleIssue';
import AboutJournal from './components/aboutJournal';
import ArticleInfo from './components/article-info';

const App = () => {
  return (
    <div className='App'>
      <Router basename="/dev-test">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about/background' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/academics' element={<Academics />} />
          <Route path='about/vmc' element={<VMC />} />
          <Route path='/research/:section' element={<Research />} />
          <Route path='/research/aboutJournal/:page' element={<AboutJournal />} />
          <Route path='/research/archives/vol1/:issueNumber' element={<ArticleIssue />} />
          <Route path='/research/archives/vol1/:articleID' element={<ArticleInfo />} />
          <Route path='/administration/:admin' element={<Administration />} />
          <Route path='/memberForm' element={<MemberForm />} />
          <Route path='/dashboard' element={<UserPage />} />
          <Route path='/verifyAccount' element={<VerifyForm />} />
          <Route path='/editForm' element={<EditForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
