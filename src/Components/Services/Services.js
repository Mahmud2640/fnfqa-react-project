import React, { useEffect, useState } from "react";
import Service from "./Service";
import "./Services.css";
import Zoom from "react-reveal/Zoom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services">
      <Zoom cascade>
        <h1 className="text-center mt-5">Our Services</h1>
      </Zoom>
      <div className="services-container">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
