import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/Home/Home';
import Footer from './components/footer/footer';
import index from '../src/index.scss';
import Logements from './pages/Logement/Logement';
import NotFound from './pages/404/404';
import About from './pages/About/about';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Header />
        <Routes>
            <Route path="/"element={<Home />}></Route>
            <Route path="/logements/:id"element={<Logements/>} />
            <Route path='/A-propos' element={<About />} />
            <Route path='*' element={<NotFound />}/>

        </Routes>
        <Footer />
    </Router>
  </React.StrictMode>,
);
