import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import './Acordeon.css';

function Acordeon(props) {
  const [open, setOpen] = useState('1');

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div className="dance-accordion">
      <Accordion open={open} toggle={toggle}>
        {/* Morenada */}
        <AccordionItem className={open === '1' ? 'active-item' : ''}>
          <AccordionHeader targetId="1">
            <i className="fas fa-mask me-2"></i> Morenada
          </AccordionHeader>
          <AccordionBody accordionId="1">
            <div className="dance-content">
              <h4>Origen e Historia</h4>
              <p>La Morenada es una danza boliviana originaria de la región del Lago Titicaca que representa el sufrimiento de los esclavos africanos en las minas durante la colonia.</p>
              
              <h4>Características</h4>
              <ul>
                <li><strong>Vestimenta:</strong> Trajes pesados con bordados plateados y dorados</li>
                <li><strong>Máscaras:</strong> Rasgos exagerados con ojos saltones y labios gruesos</li>
                <li><strong>Música:</strong> Ritmo marcado por matracas y bandas de bronce</li>
                <li><strong>Movimientos:</strong> Pasos lentos que simulan el cansancio de los esclavos</li>
              </ul>
              
              <div className="dance-gallery">
                <img src="https://picsum.photos/400/300?random=1" alt="Morenada" className="dance-image" />
                <img src="https://picsum.photos/400/300?random=2" alt="Morenada" className="dance-image" />
              </div>
            </div>
          </AccordionBody>
        </AccordionItem>

        {/* Saya */}
        <AccordionItem className={open === '2' ? 'active-item' : ''}>
          <AccordionHeader targetId="2">
            <i className="fas fa-drum me-2"></i> Saya
          </AccordionHeader>
          <AccordionBody accordionId="2">
            <div className="dance-content">
              <h4>Origen e Historia</h4>
              <p>La Saya es una expresión cultural afroboliviana que fusiona elementos africanos con influencias andinas.</p>
              
              <h4>Características</h4>
              <ul>
                <li><strong>Vestimenta:</strong> Faldas amplias y coloridas para las mujeres, pantalones blancos para hombres</li>
                <li><strong>Música:</strong> Tambores africanos y ritmos sincopados</li>
                <li><strong>Movimientos:</strong> Caderas marcadas y pasos rítmicos</li>
                <li><strong>Cantos:</strong> En dialectos africanos mezclados con español</li>
              </ul>
              
              <div className="dance-gallery">
                <img src="https://picsum.photos/400/300?random=3" alt="Saya" className="dance-image" />
                <img src="https://picsum.photos/400/300?random=4" alt="Saya" className="dance-image" />
              </div>
            </div>
          </AccordionBody>
        </AccordionItem>

        {/* Caporales */}
        <AccordionItem className={open === '3' ? 'active-item' : ''}>
          <AccordionHeader targetId="3">
            <i className="fas fa-boot me-2"></i> Caporales
          </AccordionHeader>
          <AccordionBody accordionId="3">
            <div className="dance-content">
              <h4>Origen e Historia</h4>
              <p>Los Caporales surgen en los años 70 como representación de los capataces que vigilaban a los esclavos africanos.</p>
              
              <h4>Características</h4>
              <ul>
                <li><strong>Vestimenta:</strong> Botas con cascabeles, látigos y sombreros de copa alta</li>
                <li><strong>Música:</strong> Ritmo rápido y alegre con bandas de bronce</li>
                <li><strong>Movimientos:</strong> Saltos altos y giros acrobáticos</li>
                <li><strong>Coreografía:</strong> Formaciones sincronizadas y pasos enérgicos</li>
              </ul>
              
              <div className="dance-gallery">
                <img src="https://picsum.photos/400/300?random=5" alt="Caporales" className="dance-image" />
                <img src="https://picsum.photos/400/300?random=6" alt="Caporales" className="dance-image" />
              </div>
            </div>
          </AccordionBody>
        </AccordionItem>

        {/* Chacarera */}
        <AccordionItem className={open === '4' ? 'active-item' : ''}>
          <AccordionHeader targetId="4">
            <i className="fas fa-guitar me-2"></i> Chacarera
          </AccordionHeader>
          <AccordionBody accordionId="4">
            <div className="dance-content">
              <h4>Origen e Historia</h4>
              <p>Danza folklórica argentina con influencias españolas e indígenas, popular en el noroeste del país.</p>
              
              <h4>Características</h4>
              <ul>
                <li><strong>Vestimenta:</strong> Ponchos y bombachas para hombres, vestidos floreados para mujeres</li>
                <li><strong>Música:</strong> Guitarra, bombo legüero y violín</li>
                <li><strong>Movimientos:</strong> Zapateo y zarandeo característicos</li>
                <li><strong>Coreografía:</strong> Parejas que giran en torno al bombo</li>
              </ul>
              
              <div className="dance-gallery">
                <img src="https://picsum.photos/400/300?random=7" alt="Chacarera" className="dance-image" />
                <img src="https://picsum.photos/400/300?random=8" alt="Chacarera" className="dance-image" />
              </div>
            </div>
          </AccordionBody>
        </AccordionItem>

        {/* Kullawada */}
        <AccordionItem className={open === '5' ? 'active-item' : ''}>
          <AccordionHeader targetId="5">
            <i className="fas fa-wool me-2"></i> Kullawada
          </AccordionHeader>
          <AccordionBody accordionId="5">
            <div className="dance-content">
              <h4>Origen e Historia</h4>
              <p>Danza altiplánica que representa a los hilanderos y tejedores aymaras en la época precolombina.</p>
              
              <h4>Características</h4>
              <ul>
                <li><strong>Vestimenta:</strong> Trajes bordados con hilos de plata y oro</li>
                <li><strong>Música:</strong> Melodías suaves con zampoñas y quenas</li>
                <li><strong>Movimientos:</strong> Pasos suaves que imitan el hilado</li>
                <li><strong>Elementos:</strong> Ruecas y ovillos de lana como accesorios</li>
              </ul>
              
              <div className="dance-gallery">
                <img src="https://picsum.photos/400/300?random=9" alt="Kullawada" className="dance-image" />
                <img src="https://picsum.photos/400/300?random=10" alt="Kullawada" className="dance-image" />
              </div>
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Acordeon;