import React from 'react';
import './Navegacion.css'
import {
  Nav,
  NavItem
} from 'reactstrap';
import { useLocation, Link } from 'react-router-dom';

function Navegacion(props) {
  const location = useLocation();

  return (
    <Nav tabs>
      <NavItem>
        <Link 
          to="/" 
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Pagina Principal
        </Link>
      </NavItem>
      
      <NavItem>
        <Link 
          to="/pag2" 
          className={`nav-link ${location.pathname === '/pag2' ? 'active' : ''}`}
        >
          Oferta de cursos
        </Link>
      </NavItem>
    </Nav>
  );
}

export default Navegacion;