import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import FAQPage from './components/FAQPage';

function App() {
    return(
        <>
            <header>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/faq">FAQ</Link>
                    </li>
                </ul>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/about" element={<AboutPage />}/>
                    <Route path="/faq" element={<FAQPage />}/>
                </Routes>
            </main>
        </>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
