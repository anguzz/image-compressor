import React from "react";
import './FooterStyle.css';

import github from './github.png';
import gmail from './gmail.png';
import linkedin from './linkedin.png';
const Footer = () => {
  return (
    <footer>
      
    <div className="footer">
      <div className="footer-title">Angel Santoyo </div>
      <div className="footer-subtitle">Feel free to check out my other projects or contact me below</div>
    <div className="socials">
                
      <a href="https://github.com/Angus-1"><img src={github} alt="git" width="65px" /> </a>
      <a href="mailto:santoyox714@gmail.com"><img src={gmail} alt="git" width="65px" /> </a>
      <a href="https://www.linkedin.com/in/asantoyo/"><img src={linkedin} alt="git" width="65px" /> </a>
    </div>
  </div>
  
  </footer>
  );
};
export default Footer;