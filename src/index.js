import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import Header from './components/header';
// import HomePageLayout from './components/homepagelayout';
import Main from './components/main'

render((
    <BrowserRouter>
    <div>
        <Header />
        <Main />
    </div>
    </BrowserRouter>
  ), document.getElementById('root'));
