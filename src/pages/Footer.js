import React from 'react';
import logo from '../images/logo.jpg';
import { FaFacebookSquare,
    FaInstagramSquare,
    FaYoutube,
    FaTwitter,
    FaLinkedin} from 'react-icons/fa';


const Footer = () => {
    return (
        <div class="inner-container">
      <div class="footer-box">
        <div class="quick-info">
          <h3>CONTACT US</h3>
          <div class="ellipse">
            <img className='footerLogo' src={logo} />
            <div class="para-style">
              <p>CALL US FREE</p>
              <p>(042) 111 342 547</p>
              <p>Extn No 2810, 2830, 2838</p>
            </div>
          </div>
          <div class="personal-info">
            <p>Email: customercare@dhalahore.org</p>
            <p style={{paddingTop:'10px'}}>Office Timmings: <br/>Mon-Fri ( 09:00 AM - 05:00 PM )</p>
          </div>
        </div>
        <div class="about-us">
          <h4>QUICK LINKS</h4>

          <div class="aboutUs-list">
            <ul>
              <li>DHA MTL</li>
              <li>CAREERS</li>
              <li>COVID-19</li>
              <li>DHA EXECUTIVE SERVICES</li>
              <li>E-PAY</li>
              <li>FLOWER COMPETITION</li>
              <li>RULES & REGULATION</li>
              <li>LAND OWNERS BALLOT</li>
            </ul>
          </div>
        </div>
        <div class="categories">
          <h4>FACILITIES</h4>

          <div class="aboutUs-list">
            <ul>
              <li>CINEMA</li>
              <li>CLUBS</li>
              <li>EXECUTIVE SERVICES</li>
              <li>EDUCATION SYSTEM</li>
              <li>GRAVEYARD</li>
              <li>HORTICULTURE</li>
              <li>MEDICAL CENTER</li>
              <li>MAINTENANCE</li>
            </ul>
          </div>
        </div>
        <div class="help">
          <h4>PROJECTS</h4>

          <div class="aboutUs-list">
            <ul>
              <li>BUSINESS HUB</li>
              <li>IVY GREEN</li>
              <li>PENTASQUARE</li>
              <li>GOLDCREST MALL</li>
              <li>HALLY TOWER</li>
              <li>INTEGRATED MEDICAL COMPLEX</li>
              <li>UPCOMMING JV PROJECTS</li>
            </ul>
          </div>
        </div>
        <div class="newsLetter">
          <div class="newsletter-heading">
            <h4>NEWS LETTER</h4>
            <p>Lorem Ipsum Is simply dummy text of the printing.</p>
          </div>
          <div class="input-field">
            <input
              class="footerInput"
              type="text"
              placeholder="Your email address.."
            />
            <i class="far fa-envelope"></i>
          </div>
          <div class="footer-icons">
            <i> <FaFacebookSquare/></i>
            <i><FaInstagramSquare/></i>
            <i> <FaYoutube/></i>
            <i><FaTwitter/></i>
            <i><FaLinkedin/></i>
            
          </div>
        </div>
      </div>
    </div>
    );
};

export default Footer;