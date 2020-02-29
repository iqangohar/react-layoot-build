import React ,{ Component, Fragment } from 'react'; 
import {Row,Image,Col,Button,Card,Container,Form,FormControl,Table,Navbar,Nav,NavDropdown} from 'react-bootstrap';
import "../Css/portfolio.css"
import ScrollAnimation from 'react-animate-on-scroll';

export default class Portfolio extends Component {
    render(){
        return (<Fragment>
  <ScrollAnimation animateIn="slideInLeft">

  <Row>
    <Col className="colm-1 " xs="12" md lg="4"><Table > 
    <tr><td rowspan="3" ><div className="box">64<br/>x<br/>64px</div></td>

    <td><div className="lable-1">Lorem ipsum dolor<br/></div></td></tr>
<tr><div className="lable-2">Orciinterdum condimenterdum
nullamcorper elit nam curabitur
laoreet met praesenean et iac.</div></tr>
    
    </Table></Col>
    <Col className="colm-1" xs="12" md lg="4"><Table > 
    <tr><td rowspan="3" ><div className="box">64<br/>x<br/>64px</div></td>

    <td><div className="lable-1">Lorem ipsum dolor<br/></div></td></tr>
<tr><div className="lable-2">Orciinterdum condimenterdum
nullamcorper elit nam curabitur
laoreet met praesenean et iac.</div></tr>
    
    </Table></Col>
    <Col className="colm-1" xs="12" md lg="4"><Table > 
    <tr><td rowspan="3" ><div className="box">64<br/>x<br/>64px</div></td>

    <td><div className="lable-1">Lorem ipsum dolor<br/></div></td></tr>
<tr><div className="lable-2">Orciinterdum condimenterdum
nullamcorper elit nam curabitur
laoreet met praesenean et iac.</div></tr>
    
    </Table></Col>
  </Row>
  <Row>
  <Col className="colm-1" xs="12" md lg="4"><Table > 
    <tr><td rowspan="3" ><div className="box">64<br/>x<br/>64px</div></td>

    <td><div className="lable-1">Lorem ipsum dolor<br/></div></td></tr>
<tr><div className="lable-2">Orciinterdum condimenterdum
nullamcorper elit nam curabitur
laoreet met praesenean et iac.</div></tr>
    
    </Table></Col>
    <Col className="colm-1" xs="12" md lg="4"><Table > 
    <tr><td rowspan="3" ><div className="box">64<br/>x<br/>64px</div></td>

    <td><div className="lable-1">Lorem ipsum dolor<br/></div></td></tr>
<tr><div className="lable-2">Orciinterdum condimenterdum
nullamcorper elit nam curabitur
laoreet met praesenean et iac.</div></tr>
    
    </Table></Col>
    <Col className="colm-1" xs="12" md lg="4"><Table > 
    <tr><td rowspan="3" ><div className="box">64<br/>x<br/>64px</div></td>

    <td><div className="lable-1">Lorem ipsum dolor<br/></div></td></tr>
<tr><div className="lable-2">Orciinterdum condimenterdum
nullamcorper elit nam curabitur
laoreet met praesenean et iac.</div></tr>
    
    </Table></Col> 
  </Row>
  </ScrollAnimation>

        </Fragment>
        );
    }
}
