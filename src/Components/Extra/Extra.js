import React from "react";
import "./Extra.css";
import image from "../../Images/Image/network.png";

const Extra = () => {
  return (
    <section id="about-us">
      <div
        className="container"
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h1 className="title text-center">WHY CHOOSE US ?</h1>
        <div className="row">
          <div className="col-md-6 about-us">
            <p className="about-title">We provide the following services!</p>
            <ul>
              <li>
                Commercial office complexes, factories, medical centers,
                warehouses, mechanical work shops.
              </li>
              <li>
                End of lease cleaning for commercial properties and residential
                properties.
              </li>
              <li>Carpet Steam cleaning.</li>
              <li>Dusting, Vacuuming and Floor cleaning.</li>
              <li>Maintenance of surrounding areas including car parks.</li>
              <li>Waste removal.</li>
              <li>
                We can also provide the services of floor stripping and sealing,
                tile and grout cleaning.
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img src={image} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extra;
