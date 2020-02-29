import React, { Component } from 'react';
import {Container,Row,Col,Media,Table,Form,Button}from 'react-bootstrap';
import '../Css/footer.css';

export default class Footer extends Component {
render()
{
return(

 
  <Row className="total">
<Col md lg="6">
<Col>
   <h4 style={{fontFamily:"Georgia" , paddingTop:"20px"}}> Latest From the Blog</h4>
</Col>
<Col className="cols">
      <Table className="tabs" borderless>
     <tr>
              <td rowSpan="2">
              <div className="mains"> 95<br/>x<br/>95</div>
              </td>
              <div className="data">
              <td > Metuervestas mus lacinia</td>
                  </div>

     </tr>
 <tr>
           <div className="datas"> <td >Convallisijusto vestas mus pellentum aeneansa pibu lum in aliquam volut pat integest nulla. Acsed sed nunc at fring maurisusce at elis ut vitae laorem.</td></div> 
</tr>

      </Table>
  
    </Col>
    <Col className="cols">
      <Table className="tabs" borderless>
     <tr>
              <td rowSpan="2">
              <div className="mains"> 95<br/>x<br/>95</div>
              </td>
              <div className="data">
              <td > Metuervestas mus lacinia</td>
                  </div>

     </tr>
 <tr>
           <div className="datas"> <td >Convallisijusto vestas mus pellentum aeneansa pibu lum in aliquam volut pat integest nulla. Acsed sed nunc at fring maurisusce at elis ut vitae laorem.</td></div> 
</tr>

      </Table>
  
    </Col>
</Col>
<Col md lg="3">
<Col >

<h4 style={{fontFamily:"Georgia" , paddingTop:"20px"}}>Company Details</h4>

  
  </Col>
  <Col className="cols">
   
    
   Company Name 
   <br/>
   Street Name & Number
   <br/>
   Town
   <br/>
   Postcode/Zip
<br/>
   <br/>
   Tel: xxxxx xxxxxxxxxx
   <br/>
   Fax: xxxxx xxxxxxxxxx 
   <br/>
   Email:
  <div style={{display:"inline" ,color:"#97455E"}}>
   contact@mydomain.com 
  </div>

   </Col>
   <Col className="cols">
    <br/>
    
    Office Hours 
    <br/>
    Monday - Friday: 08:00 - 17:30
    <br/>
    Saturday: 08:00 - 13:00
    </Col>

</Col>
<Col md lg="3">
<Col> 
<h4 style={{fontFamily:"Georgia", paddingTop:"20px"}}>Contact Us        </h4> </Col>
        <Col className="cols">

        <Form className="forms">
  <Form.Group controlId="formname">
   
    <Form.Control type="input text" placeholder="Name" />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formemail">
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" rows="3" placeholder="Message"/>
  </Form.Group>
 
  <Button variant="primary" type="submit" className="botn">
    Submit
  </Button>
</Form>
</Col>

</Col>


  </Row>
 

  



);



}

}