import React from "react";
import "./Banner.css";
import btn from "../../Images/Image/play.png";
import home from "../../Images/Image/home2.png";
import wave from "../../Images/Image/wave1.png";

const Banner = () => {
  return (
    <section id="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="promo-title">FNF TRADING CONTRACTING AND SERVICES</p>
            <p>
              THIS IS TRADING CONTRACTING AND SERVICES CO. IF YOU WANT TO
              CONTACT US PLEASE CALL US
            </p>
            <a href="https://web.facebook.com/fnfqa" target="_blank">
              <img src={btn} className="play-btn" />
              See more
            </a>
          </div>
          <div className="col-md-6 text-center">
            <img src={home} className="img-fluid" />
          </div>
        </div>
      </div>
      <img src={wave} className="bottom-img"></img>
    </section>
  );
};

export default Banner;
