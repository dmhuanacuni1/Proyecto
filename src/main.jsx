import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'reactstrap';
import Acordeon from './Acordion.jsx';
import Navegacion from './Navegacion.jsx';
import { BrowserRouter } from 'react-router-dom';
import Principal from './Principal.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/Proyecto'>
    <Principal></Principal>
  </BrowserRouter>
)