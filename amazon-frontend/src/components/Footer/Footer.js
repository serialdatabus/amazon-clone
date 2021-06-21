import React from "react";
import amazonlogo from "../../assets/amazonlogo.png";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <a href="/#top" class="back-to-top">
        <span>Back to top</span>
      </a>

      <div class="amazon-logo">
        <a href="/">
          <img alt="" src={amazonlogo} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
