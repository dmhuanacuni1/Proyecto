import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Acordeon from "./Acordion";
import Navegacion from "./Navegacion";
import Titulo from "./Titulo";
import Card from "./Card";
import Footer from "./footerp";

function Pagini(props) {
  return (
    <div className="princ">
      <Acordeon></Acordeon>
      
    </div>
  );
}

function OfertaCur(props) {
  return (
    <div className="cur">
      <Card></Card>
    </div>
  );
}

function Principal(props) {
  return (
    <div>
      <div><Titulo></Titulo></div>
      <div><Navegacion></Navegacion></div>
      <div className="contenido">
        <Routes>
          <Route path="/" element={<Pagini></Pagini>}></Route>
          <Route path="/pag2" element={<OfertaCur></OfertaCur>}></Route>
        </Routes>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Principal;