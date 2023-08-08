import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/Home/Home';
import Footer from './components/footer/footer';
import index from '../src/index.scss';
import Logements from './components/UniqueCards/UniqueCards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Header />
        <Routes>
            <Route path="/"element={<Home />}></Route>
            <Route path="/houses/:id"element={<Logements/>} />
        </Routes>
        <Footer />
    </Router>
  </React.StrictMode>,
);
