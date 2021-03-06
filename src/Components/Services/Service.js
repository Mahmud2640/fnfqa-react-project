import React from "react";
import "./Services.css";

const Service = ({ service }) => {
  const { name, img } = service;
  return (
    <div
      className="service"
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
      <a href="#contact">
        <button className="btn btn-primary">Booking</button>
      </a>
    </div>
  );
};

export default Service;
