import React ,{ Component, Fragment } from 'react'; 
import {Row,Image,Col,Button,Card,Container,Form,FormControl,Table,Navbar,Nav,NavDropdown} from 'react-bootstrap';
import "../Css/navbars.css"

export default class Navbars extends Component {
    render(){
        return (<Fragment>
<Navbar className="na" expand="lg">
 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
  <Button className="button"> <Nav.Link href="#home">HOME</Nav.Link></Button>
  <Button className="button"><Nav.Link href="#link">STYLE DEMO</Nav.Link></Button>
  <Button className="button"> <Nav.Link href="#link">FULL WIDTH</Nav.Link></Button>
  <Button className="button"> <NavDropdown title="DROPDOWN" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown></Button>
      <Button className="button"><Nav.Link href="#link">PORTFOLIO</Nav.Link></Button>
      <Button className="button"><Nav.Link href="#link">GALLARY</Nav.Link></Button>
      <Button className="button"><Nav.Link href="#link">LONG TEXT LINK</Nav.Link></Button>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </Fragment>
        );
    }
}
