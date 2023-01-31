import React from "react";
import "./About.css";
import image from "../../Images/Icon/service1.png";
import { Card } from "react-bootstrap";

const About = () => {
  return (
    <section id="about">
      <div
        className="container text-center"
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="5000"
      >
        <h1 className="title">WHAT WE DO ?</h1>
        <div className="card-grid">
          <Card className="mx-auto shadow-lg" style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                TO BE THE LEADING FIRM IN THE FIELD OF INTERIOR DESIGNING. FNF
                TRADING CONTRATATING AND SERVICE WILL STRIVE TO OFFER EXCELLENT
                SERVICES BY PROVIDING EXCELLENT QUALITY OF WORK APPLYING THE
                LATEST STATE OF THE ART TECHNOGY FOR THE INDUSTRY.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-auto shadow-lg" style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                TO EXPLOIT THE MAXIMUM LEVEL OF OUR QUALIFUED PERSONNEL AND TO
                ESTABLISH A PROFESSIONAL TEAM COMMITTED TO SERVE OUR CLIENTS.
                OUT PLEDGE IS TO BUILD EVERLASTING RELATUONSHIP WITH OUR
                CUSTOMERS BY MEETING THEIR EXPECTATION AND GAINING THEIR TRUST.
                THROUGH DE DICATED PERFORMANCE BY EACH AND EVERY MEMBER OF THE
                FNF TRADING CONTRACTING AND SERVIC TEAM.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-auto shadow-lg" style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Title>Safety Coordaintor</Card.Title>
              <Card.Text>
                <p>
                  <li>
                    PROVIDE GUIDANCE TO EMPLOYEES AND SUPERVISSION IN THE
                    IMPLEMENTATION OF THIS PROCEDURE.
                  </li>
                  <li>
                    ENSURE ALL WORK AREAS AND EQUIPMENT USED FOR WELDING/
                    CUTTING OPERATION ARE BEING INSPECTED FOR COMPLIANCE WITH
                    THE REQUIREMENTS OF THIS PROCEDURE.
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
