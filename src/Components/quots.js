import React ,{ Component, Fragment } from 'react'; 
import {Row,Image,Col,Button,Card,Container,Form,FormControl,Table,Navbar,Nav,NavDropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import ScrollAnimation from 'react-animate-on-scroll';

import '../Css/quots.css';

export default class Quots extends Component {
    render(){
        return (<Fragment>
<Row>
    <Col xs="12"md lg="6">
    <ScrollAnimation animateIn="rubberBand">
    <Row className="rows"> 
                <Col className="col-1" xs="4" md="4">
<div className="title-left"></div>
                </Col>
                <Col className="col-2"  xs="3" md="4">
<div className="text">YOUR TITLE HERE</div>
                </Col>
                <Col className="col-3" xs="4" md="4">
<div className="title-right"></div>
                </Col>
            </Row> 
            </ScrollAnimation>
            <ScrollAnimation animateIn="slideInLeft">
            <Row className="first-half"> 
       
  <Col  md lg="4" ><div className="circle">128<br/>x<br/>128px</div></Col>

   <Col  md lg="8"><div className="quots-lable-1">Title Goes Here<br/></div>
   <div className="quots-lable-2">Vestibulumaccumsan egestibulum eu justo<br/>
convallis augue estas aenean elit intesque sed.
Facilispede estibulum nulla orna nisl velit elit ac 
aliquat non tincidunt.</div><br/><div className="lable-1">Read More »</div></Col>

    
    
    </Row>
    </ScrollAnimation>

            </Col>
   
    <Col md lg="6">
    <ScrollAnimation animateIn="rubberBand">
    <Row className="rows"> 
                <Col className="col-1" xs="4" md="4">
<div className="title-left"></div>
                </Col>
                <Col className="col-2"  xs="3" md="4">
<div className="text">YOUR TITLE HERE</div>
                </Col>
                <Col className="col-3" xs="4" md="4">
<div className="title-right"></div>
                </Col>
            </Row> 
            </ScrollAnimation>
            <ScrollAnimation animateIn="slideInRight">
             <Row className="second-half"> 
             <Col  md lg="2" ><div className="icon-1"> <FontAwesomeIcon icon={faQuoteLeft} size="5x"/></div></Col>
             <Col  md lg="6"><div className="quots-lable-11">Tommy Tanker - CEO</div><br/><div className="lable-1">View This Project »</div><br/></Col>
             </Row>
   
  <Row><Col  md lg="12"><div className="quots-lable-22">Justoid nonummy laoreet phasellent penatoque in antesque pellus elis eget
tincidunt. Nequatdui laorem justo a non tellus laoreet tincidunt ut vel velit.
Idenim semper pellente velis felit ac nullam pretium morbi lacus.</div></Col></Row>
</ScrollAnimation>

    
  
    

            {/* <Col  xs="12" md lg="4"><Table className="info"> 
    <tr><td rowspan="3" ><div className="icon-1"> <FontAwesomeIcon icon={faQuoteLeft} size="5x"/></div></td>

    <td><div className="lable-1">Tommy Tanker - CEO<br/>View This Project »<br/></div></td></tr>
<tr><div className="lable-2">Justoid nonummy laoreet phasellent penatoque in antesque pellus elis eget
tincidunt. Nequatdui laorem justo a non tellus laoreet tincidunt ut vel velit.
Idenim semper pellente velis felit ac nullam pretium morbi lacus.</div></tr>
    
    </Table></Col> */}

    </Col>
</Row>
        </Fragment>
        );
    }
}
