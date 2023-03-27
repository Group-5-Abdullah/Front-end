import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'


function Footer() {
    return (
        <div id='Footer'>
            
            <p style={{fontSize: "15px"} } >&copy; Celebrate Pro App 2023 </p>

            
            <p>00962799113399-Amman.Jordan</p>

            <a href="https://www.facebook.com/celbreto Pro">
                <FontAwesomeIcon icon={faFacebookF} style={{ color: 'black'  }} />
            </a>
            <a href="https://twitter.com/celbreto Pro">
                <FontAwesomeIcon icon={faTwitter} style={{ color: 'black' }} />
            </a>
            <a href="https://www.instagram.com/celbreto Pro">
                <FontAwesomeIcon icon={faInstagram} style={{ color: 'black' }} />
            </a>
        </div>
    );
}
export default Footer;
