import React from "react";
import "./Employe.css";
import profile1 from "../../Images/Image/profile-1.jpeg";
import profile2 from "../../Images/Image/profile-2.jpeg";
import profile3 from "../../Images/Image/profile-3.jpeg";
import profile4 from "../../Images/Image/profile-4.jpg";

const Employe = () => {
  return (
    <section className="teams" id="teams">
      <div className="max-width">
        <h2 className="teams-title">Our Teams</h2>
        <div className="carousel owl-carousel">
          <div className="card">
            <div className="box">
              <img src={profile1} alt="" />
              <div className="text">Ahsanul Hoque Jihad</div>
              <p>Founder "FNF TRADING CONTRACTING AND SERVICES"</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src={profile2} alt="" />
              <div className="text">Abdullah Al Mahmud</div>
              <p>Development Manager "FNF TRADING CONTRACTING AND SERVICES"</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src={profile3} alt="" />
              <div className="text">MD. Arafat Hossain</div>
              <p>Representative "FNF TRADING CONTRACTING AND SERVICES"</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src={profile4} alt="" />
              <div className="text">Kazi Shah Jalal Forhad</div>
              <p>Sales Manager "FNF TRADING CONTRACTING AND SERVICES"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Employe;
