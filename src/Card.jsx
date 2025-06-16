import './Card.css';
import React, { useState } from 'react';

import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

function CardComponent(props) {
  // Estados para cada modal
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  // Funciones para alternar cada modal
  const toggle1 = () => setModal1(!modal1);
  const toggle2 = () => setModal2(!modal2);
  const toggle3 = () => setModal3(!modal3);

  return (
    <div>
      <CardGroup>
        {/* Primera Card */}
        <Card>
          <CardImg
            alt="Morenada"
            src="https://picsum.photos/318/180?random=1"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Morenada</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Danza folklórica
            </CardSubtitle>
            <CardText>
              Danza tradicional boliviana que representa el trabajo en las minas.
            </CardText>
            <Button color="primary" onClick={toggle1}>
              Ver detalles
            </Button>
            
            <Modal isOpen={modal1} toggle={toggle1}>
              <ModalHeader toggle={toggle1}>Morenada</ModalHeader>
              <ModalBody>
                <p>La Morenada es una danza folklórica andina, principalmente boliviana, que representa el trabajo en las minas y se caracteriza por:</p>
                <ul>
                  <li>Trajes coloridos y pesados</li>
                  <li>Máscaras con rasgos exagerados</li>
                  <li>Música enérgica con matracas</li>
                  <li>Movimientos que imitan el esfuerzo de los esclavos</li>

                </ul>
                <img 
                  src="https://picsum.photos/500/300?random=1" 
                  alt="Morenada" 
                  className="img-fluid mt-3"
                  
                />
                <h3>           Precio:   50Bs</h3>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={toggle1}>
                  Cerrar
                </Button>
              </ModalFooter>
            </Modal>
          </CardBody>
        </Card>

        {/* Segunda Card */}
        <Card>
          <CardImg
            alt="Saya"
            src="https://picsum.photos/318/180?random=2"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Saya</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Danza afroboliviana
            </CardSubtitle>
            <CardText>
              Expresión cultural de la comunidad afrodescendiente en Bolivia.
            </CardText>
            <Button color="primary" onClick={toggle2}>
              Ver detalles
            </Button>
            
            <Modal isOpen={modal2} toggle={toggle2}>
              <ModalHeader toggle={toggle2}>La Saya</ModalHeader>
              <ModalBody>
                <p>La Saya es una manifestación cultural que combina:</p>
                <ul>
                  <li>Música con tambores y ritmos africanos</li>
                  <li>Cantos en dialectos africanos</li>
                  <li>Movimientos sensuales y enérgicos</li>
                  <li>Vestimenta colorida con faldas amplias</li>
                </ul>
                <img 
                  src="https://picsum.photos/500/300?random=2" 
                  alt="Saya" 
                  className="img-fluid mt-3"
                />
                <h3>           Precio:   70Bs</h3>

              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={toggle2}>
                  Cerrar
                </Button>
              </ModalFooter>
            </Modal>
          </CardBody>
        </Card>

        {/* Tercera Card */}
        <Card>
          <CardImg
            alt="Caporales"
            src="https://picsum.photos/318/180?random=3"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Caporales</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Danza tradicional
            </CardSubtitle>
            <CardText>
              Danza vigorosa inspirada en los capataces de los esclavos africanos.
            </CardText>
            <Button color="primary" onClick={toggle3}>
              Ver detalles
            </Button>
            
            <Modal isOpen={modal3} toggle={toggle3}>
              <ModalHeader toggle={toggle3}>Los Caporales</ModalHeader>
              <ModalBody>
                <p>Los Caporales es una danza que se caracteriza por:</p>
                <ul>
                  <li>Movimientos acrobáticos y saltos altos</li>
                  <li>Botas con cascabeles</li>
                  <li>Sombreros de copa alta</li>
                  <li>Latigos que simulan el dominio sobre los esclavos</li>
                </ul>
                <img 
                  src="https://picsum.photos/500/300?random=3" 
                  alt="Caporales" 
                  className="img-fluid mt-3"
                />
                <h3>           Precio:   100Bs</h3>

              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={toggle3}>
                  Cerrar
                </Button>
              </ModalFooter>
            </Modal>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}

export default CardComponent;