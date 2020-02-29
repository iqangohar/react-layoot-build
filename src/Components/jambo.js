import React, { Component } from 'react';
import {Jumbotron,Container,Row,Col,Button}from 'react-bootstrap';
import '../Css/jambo.css';
import ScrollAnimation from 'react-animate-on-scroll';


export default class Jambo extends Component {
render()
{
return(

  <ScrollAnimation animateIn="zoomIn">

<Container>
 <Row className="jambosa">
      <Col xs="12" md lg="8" >
<div className="content">
<h1>Orciinterdum Corper Elit Nam ?</h1>
   
  
   <p> Orciinterdum condimen urabitur laoreet met praesenean et iac ! </p>
</div>

 
    
    </Col>

<Col xs="12" md lg="4">


    <Button variant='secondary' size="lg" className="contact_us_btn">
    CONTACT US TODAY
    </Button>
    
 
      </Col>
      
  </Row>


  </Container>
  </ScrollAnimation>

);

}
}