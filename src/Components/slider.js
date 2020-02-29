import React ,{ Component, Fragment } from 'react'; 
import {Carousel } from 'react-bootstrap';
import "../Css/slider.css"
import ScrollAnimation from 'react-animate-on-scroll';

import img1 from '../img/b1.jpg';


export default class Slider extends Component {
    render(){
        return (<Fragment>

<center className="slid">
<ScrollAnimation animateIn="fadeIn">
<Carousel>
  <Carousel.Item>
    
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
     <div class="text-block">
     <h1>Lorem ipsum dolor</h1>
    <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
elit. Nunc non diam erat. In frin gilla massa ut nisi „</p>
  </div>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Third slide"
    />
    <div class="text-block">
    <h1>Lorem ipsum dolor</h1>
    <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
elit. Nunc non diam erat. In frin gilla massa ut nisi „</p>
  </div>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Third slide"
    />
    <div class="text-block">
    <h1>Lorem ipsum dolor</h1>
    <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
elit. Nunc non diam erat. In frin gilla massa ut nisi „</p>
  </div>  
  </Carousel.Item>
</Carousel>
</ScrollAnimation>
</center>
        </Fragment>
        );
    }
}
