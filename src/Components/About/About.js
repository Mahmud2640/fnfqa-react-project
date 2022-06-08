import React from "react";
import "./About.css";
import image from "../../Images/Icon/service1.png";
import { Card } from "react-bootstrap";

const About = () => {
  return (
    <section id="about">
      <div className="container text-center">
        <h1 className="title">WHAT WE DO ?</h1>
        <div className="card-grid">
          <Card className="mx-auto shadow-lg" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                To be the leading firm in the field of interior designing. Fnf
                Trading Contratating and service will strive to offer excellent
                services by providing excellent quality of work applying the
                latest state of the art technogy for the industry.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-auto shadow-lg" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                To exploit the maximum level of our qualifued personnel and to
                establish a professional team committed to serve our clients.
                Out pledge is to build everlasting relatuonship with our
                customers by meeting their expectation and gaining their trust.
                through de dicated performance by each and every member of the
                fnf trading contracting and servic team.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-auto shadow-lg" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Safety Coordaintor</Card.Title>
              <Card.Text>
                <p>
                  <li>
                    Provide guidance to employees and supervission in the
                    implementation of this procedure.
                  </li>
                  <li>
                    Ensure all work areas and equipment used for welding/cutting
                    operation are being inspected for compliance with the
                    requirements of this procedure.
                  </li>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
