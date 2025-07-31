import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohan Shridhar </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br />
            I am currently looking for software developer role.
            <br />
            I have completed BE (computer Science and Engineering)  at HKBKCE
            Bengaluru.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing tennis,badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

           
           
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
