import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import rare from './images/rare.png';
console.log(rare); 

const Welcome = () => {
    return(
    <div>
        <Container>
        <Row>
           <Col><img src={rare} width ='250' height = '250' alt="Logo" /></Col>
           <Col>
           <Row>ALBUM</Row>
           <Row>Rare</Row>
           <Row>By Selena Gomez</Row>
           <Row>2019 ⚬ 10 songs,42 min</Row>
           <Row>
               <Button color="success">Pause</Button>
           </Row>
           
           </Col>
       </Row>
       <Row>
           <Col>#</Col>
           <Col>Title</Col>
           <Col>Timer Icon</Col>
           <Col>Like Icon</Col>
       </Row>
       <hr></hr>
        </Container>
    </div>
)
}

export default Welcome;