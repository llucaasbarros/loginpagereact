import React from 'react';
import './Footer.css';
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='sb__footer section__padding'>
        <div className='sb__footer-links'>
          <div className='sb__footer-links_div'>
            <h4>For Business</h4>
            <a href='/employer'>
              <p>Employer</p>
            </a>
            <a href='/healthplan'>
              <p>Health Plan</p>
            </a>
            <a href='/individual'>
              <p>Individual</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Resources</h4>
            <a href='/resource'>
              <p>Resource Center</p>
            </a>
            <a href='/employer'>
              <p>Testimonials</p>
            </a>
            <a href='/employer'>
              <p>STV</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Resources</h4>
            <a href='/resource'>
              <p>Swing Tech</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Company</h4>
            <a href='/about'>
              <p>About</p>
            </a>
            <a href='/press'>
              <p>Press</p>
            </a>
            <a href='/career'>
              <p>Career</p>
            </a>
            <a href='/contact'>
              <p>Contact</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Coming soon on</h4>
            <div className='socialmedia'>
              <p><FaFacebook /></p>
              <p><FaInstagram /></p>
              <p><FaLinkedin /></p>
              <p><FaTwitter /></p>
            </div>
          </div>
        </div>
        <hr />
        <div className='sb__footer-below'>
          <div className='sb__footer-copyright'>
            <p>
              @{new Date().getFullYear()} BoraPraPraia. All Rights Reserved.
            </p>
          </div>
          <div className='sb__footer-below-links'>
            <a href='/terms'>
              <div><p>Terms & Conditions</p></div>
            </a>
            <a href='/privacy'>
              <div><p>Privacy</p></div>
            </a>
            <a href='/security'>
              <div><p>Security</p></div>
            </a>
            <a href='/cookie'>
              <div><p>Cookie Declaration</p></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
