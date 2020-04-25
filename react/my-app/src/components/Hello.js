import React, { Component } from 'react'
import { Container,Row , Col } from 'reactstrap'

class Hello extends Component {
    render() {
        return (
           <div>
               <Container>
               <Row>
        <Col>{this.props.sr}</Col>
           <Col>{this.props.title}</Col>
        <Col>{this.props.time}</Col>
           <Col>Like Icon</Col>
       </Row>
               </Container>
               <hr></hr>
           </div>

        )
    }
}
export default Hello