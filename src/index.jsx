import React from 'react';
import ReactDOM from 'react-dom/client';

// import './index.css'
import Form from './Components/Form';
import Inc_dec from './Components/Inc-dec';
import Odd_Even from './Components/Odd_Even';
import Covide from './Components/Api/Covide';
import Api1 from './Components/Api/Api1';
import Practice from './Components/Practice';
import Todo from './Components/TO-DO/Todo';
import Filtermethod from './Components/Filtermethod';
import Accordion from './Components/Accordion.jsx/Accordion';
import Card from './Components/Card/Card';
import Touchme from './Components/Touchme';
import About from './Components/OMDB-Clone/About';
import OMDBapp from './Components/OMDB-Clone/OMDBapp';
import { BrowserRouter } from 'react-router-dom';

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <OMDBapp/>
    </BrowserRouter>
    {/*
    <Practice/>
    <Todo/>
    <About/> */}
    {/* <Touchme/> */}
    {/* <Card/> */}
    {/* <Accordion/>
    <Filtermethod/>
    <Api1/>
    <Covide/>
    <Form/>
    <Inc_dec/>
    <Odd_Even/> */}
  </React.StrictMode>
);

