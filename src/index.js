import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/Home/Home';
import Footer from './components/footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Header />
        <Routes>
            <Route path="/"element={<Home />}></Route>
        </Routes>
        <Footer />
    </Router>
  </React.StrictMode>,
);
