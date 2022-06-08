import React from "react";
import "./Footer.css";
import wave from "../../Images/Image/wave2.png";
import logo from "../../Images/Logo/logo-removebg.png";

const Footer = () => {
  return (
    <section id="footer">
      <img src={wave} className="footer-img" />
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-box">
            <img src={logo} />
            <p>
              THIS IS TRADING CONTRACTING AND SERVICES CO. IF YOU WANT TO
              CONTACT US PLEASE CALL.
              <br />
              <strong>CEO: +974 66767654</strong>
              <br />
              <strong>PRO: +974 77582590</strong>
              <br />
              <strong>Office: +974 70743794</strong>
              <br />
              <strong>Doha, Qatar</strong>
            </p>
          </div>
          <div className="col-md-4 footer-box">
            <p>
              <b>Contact Us</b>
            </p>
            <p> Barwa Towers, Al Sadd, Doha-Qatar</p>
            <p>
              <a className="effect" href="tel:+974 70743794">
                +974 70743794
              </a>
            </p>
            <p>
              <a className="effect" href="mailto:fnf.qat@gmail.com">
                fnf.qat@gmail.com
              </a>
            </p>
          </div>
          <div className="col-md-4 footer-box">{/* map */}</div>
        </div>
        <hr />
        <p className="copyright">
          Website Crfted by{" "}
          <a className="effect" href="https://web.facebook.com/mahmud2640">
            Coder-Mahmud
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
