import React ,{ Component, Fragment } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn,faTwitter,faPinterest,faGooglePlus,faFacebook } from '@fortawesome/free-brands-svg-icons'
// import { faCoffee,FaFacebook,faEdit,falinked,FaAngular,faTwitter } from '@fortawesome/free-regular-svg-icons'


import "../Css/icon.css"

export default class Icon extends Component {
    render(){
        return (<Fragment>
            <div className="icon_grid">
                <div className="icons">
                

<div className="icon-1"> <FontAwesomeIcon icon={faLinkedinIn} size="2x"/></div>
<div className="icon-1"> <FontAwesomeIcon icon={faTwitter} size="2x"/></div>
<div className="icon-1"> <FontAwesomeIcon icon={faPinterest} size="2x"/></div>
<div className="icon-1"> <FontAwesomeIcon icon={faGooglePlus} size="2x"/></div>
{/* <div className="icon-1"> <FontAwesomeIcon icon={faQuoteLeft} size="2x"/></div> */}


</div>
<div className="hrefs">
    <div className="fst"><a href="#" >Sign Up</a></div>
    <div className="fst"><a href="#" >Login</a></div>
    <div className="fst"><a href="#" >RSS Feeds</a></div>
    <div className="lst"><a href="#" >Archived News</a></div>


</div>

</div>

        </Fragment>
        );
    }
}
