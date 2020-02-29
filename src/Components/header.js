import React ,{ Component, Fragment } from 'react'; 
import {Row,Image,Col,Button,Card,Container,Form,FormControl,Table,Navbar,Nav,NavDropdown} from 'react-bootstrap';
import "../Css/header.css"
import Navbars from './navbars';


export default class Header extends Component {
   
    render(){
        return (<Fragment>

  <Row className="head">
    <Col xs="5" md lg="5">
    <Table > 
    <tr><td rowspan="2" ><div className="title">IMAGINATIVE</div></td>

    <td><div className="tag">Free PSD<br/>Website Template</div></td>
    </tr>
    </Table>
    </Col>
    
    <Col xs="12"md lg="7" > 
    <Form className="form-search" inline>
      <FormControl type="text" placeholder="Search Our Website" className="search" />
      <Button className="button">Submit</Button>
    </Form>
    </Col>
  </Row>

  <Row className="bar">
    <Navbars/>
{/* <Navbar className="nav" >
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">HOME</Nav.Link>
      <Nav.Link href="#link">STYLE DEMO</Nav.Link>
      <Nav.Link href="#link">FULL WIDTH</Nav.Link>
      <NavDropdown title="DROPDOWN" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#link">PORTFOLIO</Nav.Link>
      <Nav.Link href="#link">GALLARY</Nav.Link>
      <Nav.Link href="#link">LONG TEXT LINK</Nav.Link>
     
    </Nav>
   
  </Navbar.Collapse>
</Navbar> */}
   
  </Row>

        </Fragment>
        );
    }
}
