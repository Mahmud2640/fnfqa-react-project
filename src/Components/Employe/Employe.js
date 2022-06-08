import React from "react";
import "./Employe.css";
import profile1 from "../../Images/Image/profile-1.jpeg";
import profile2 from "../../Images/Image/profile-2.jpeg";
import profile3 from "../../Images/Image/profile-3.jpeg";
import profile4 from "../../Images/Image/profile-4.jpg";

const Employe = () => {
  return (
    <section class="teams" id="teams">
      <div class="max-width">
        <h2 class="teams-title">Our Teams</h2>
        <div class="carousel owl-carousel">
          <div class="card">
            <div class="box">
              <img src={profile1} alt="" />
              <div class="text">Ahsanul Hoque Jihad</div>
              <p>Founder "FNF TRADING CONTRACTING AND SERVICES"</p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <img src={profile4} alt="" />
              <div class="text">Abdullah Al Mahmud</div>
              <p>Web Developer "FNF TRADING CONTRACTING AND SERVICES"</p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <img src={profile2} alt="" />
              <div class="text">MD. Arafat Hossain</div>
              <p>Representative "FNF TRADING CONTRACTING AND SERVICES"</p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <img src={profile3} alt="" />
              <div class="text">Kazi Shah Jalal Forhad</div>
              <p>Sales Manager "FNF TRADING CONTRACTING AND SERVICES"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Employe;
