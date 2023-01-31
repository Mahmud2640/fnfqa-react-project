import React from "react";
import "./Employe.css";
import profile1 from "../../Images/Image/profile-1.jpeg";
import profile2 from "../../Images/Image/profile-2.jpeg";
import mahmud from "../../Images/Image/mahmud.jpeg";
import profile5 from "../../Images/Image/profile-5.jpeg";
import profile6 from "../../Images/Image/profile-6.jpeg";

const Employe = () => {
  return (
    <section class="teams" id="teams">
      <div class="max-width">
        <h2 class="teams-title">Our Teams</h2>
        <div class="carousel owl-carousel">
          <div class="card">
            <div class="box">
              <img src={profile1} alt="" />
              <div class="text">
                <strong> Ahsanul Hoque Jihad</strong>
              </div>
              <p>Founder</p>
            </div>
          </div>

          <div class="card">
            <div class="box">
              <img src={mahmud} alt="" />
              <div class="text">
                <strong>Abdullah Al Mahmud</strong>
              </div>
              <p>Web Developer</p>
            </div>
          </div>

          <div class="card">
            <div class="box">
              <img src={profile2} alt="" />
              <div class="text">
                <strong>MD. Arafat Hossain</strong>
              </div>
              <p>Representative</p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <img src={profile5} alt="" />
              <div class="text">
                <strong>Mona Liza A. Bela-ong</strong>
              </div>
              <p>Marketing Executive</p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <img src={profile6} alt="" />
              <div class="text">
                <strong>MD Rayhan U Shamim</strong>
              </div>
              <p>Marketing Representative</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Employe;
