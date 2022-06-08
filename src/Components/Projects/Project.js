import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const { name, img } = project;
  return (
    <div className="service">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
      <Link to="/checkout">
        <button className="btn btn-primary">Booking</button>
      </Link>
    </div>
  );
};

export default Project;
