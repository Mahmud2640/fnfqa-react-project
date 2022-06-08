import React from "react";

const Project = ({ project }) => {
  const { name, img } = project;
  return (
    <div className="service">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
    </div>
  );
};

export default Project;
