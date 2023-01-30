import React from "react";
import "./Social.css";
import facebook from "../../Images/Icon/facebook-icon.png";
import instagram from "../../Images/Icon/instagram-icon.png";
import twitter from "../../Images/Icon/twitter-icon.png";
import messenger from "../../Images/Icon/messenger-icon.png";
import whatsapp from "../../Images/Icon/whatsapp-icon.png";
import linkedin from "../../Images/Icon/linkedin-icon.png";
import snapchat from "../../Images/Icon/snapchat-icon.png";

const Social = () => {
  return (
    <section id="social-media">
      <div className="container text-center">
        <p>FIND US ON SOCIAL MEDIA</p>
        <div className="social-icons">
          <a href="https://web.facebook.com/fnfqa" target="_blank">
            <img src={facebook} />
          </a>
          <a href="https://www.instagram.com/fnf_qat/" target="_blank">
            <img src={instagram} />
          </a>
          <a href="#" target="_blank">
            <img src={twitter} />
          </a>
          <a href="https://m.me/fnfqa" target="_blank">
            <img src={messenger} />
          </a>
          <a href="https://wa.me/+97470743794" target="_blank">
            <img src={whatsapp} />
          </a>
          <a href="#">
            <img src={linkedin} />
          </a>
          <a href="#">
            <img src={snapchat} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Social;
