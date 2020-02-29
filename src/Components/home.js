import React ,{ Component, Fragment } from 'react'; 
import Icon from './icon';
import Slider from './slider';
import Seprator from './sectionseprator';
import Portfolio from './portfolio';
import Jambo from './jambo';
import Header from './header';
import Footer from './foorter';
import Quots from './quots';
import Test from './test'

export default class Home extends Component {
    render(){
        return (<Fragment>
<Icon/>
<Header/>
<Slider/>
<Seprator/>
<Portfolio/>
<Quots/>

<Jambo/>
<Footer/>
        </Fragment>
        );
    }
}
