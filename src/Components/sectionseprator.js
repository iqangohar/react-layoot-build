import React ,{ Component, Fragment } from 'react'; 
import { Row, Col } from 'react-bootstrap';
import '../Css/sectonseprator.css';
import ScrollAnimation from 'react-animate-on-scroll';


export default class Seprator extends Component {
    render(){
        return (<Fragment>
            <ScrollAnimation animateIn="rubberBand">
            <Row className="rows"> 
                <Col className="col-1" xs="4" md="5">
<div className="bord-1"></div>
                </Col>
                <Col className="col-2" xs="3" md="2" >
<div className="text"><h4>YOUR TITLE HERE</h4></div>
                </Col>
                <Col className="col-3" xs="4" md="5">
<div className="bord-2"></div>
                </Col>
            </Row> </ScrollAnimation>
        </Fragment>
        );
    }
}
