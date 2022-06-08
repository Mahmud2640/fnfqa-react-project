import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image from "../../Images/Image/happy.jpeg";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
