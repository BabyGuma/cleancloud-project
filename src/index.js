import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Screen2 from './pages/Screen2';
import Screen3  from './pages/Screen3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/more' element={<Screen2/>}/>
        <Route path='/sensores' element={<Screen3/>}/>
      </Routes>
    </Router>,
  </React.StrictMode>
);
