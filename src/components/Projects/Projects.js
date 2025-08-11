import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/Train-Ticket-Booking-Application.png";
// import Fitness from "../../Assets/Projects/FitnessPro.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import cookit from "../../Assets/Projects/cookit.png";
import Devtracker from "../../Assets/Projects/Devtracker.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cookit}
              isBlog={false}
              title="Cookit"
              description=" A recipe discovery and management platform built with Spring Boot, MySQL, HTML, CSS, and JavaScript. Features include curated recipes by admins, user registration, JWT-based authentication, personalized favorites list, and a dynamic, responsive UI. Designed to help users explore, save, and enjoy delicious meals effortlessly ."
              ghLink="https://github.com/mohanmsgithub/cookit"
              demoLink="https://cookit-e97n.onrender.com"
            />
          </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Devtracker}
              isBlog={false}
              title="Dev Tracker"
              description="DevTrack is a developer productivity and learning tracker built with React.js and Spring Boot. It features GitHub login with JWT authentication, a Daily Logs system for tracking learning, building, and challenges, customizable rich-text Notes stored locally in the sql, and a Kanban board for task management. All data is persistently stored in MySQL and accessed via secure REST APIs"
              ghLink="https://github.com/mohanmsgithub/Devtrack"
              demoLink="https://devtrack-nine.vercel.app/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Train-Ticket-Booking-Application}
              isBlog={false}
              title="Train-Ticket-Booking-Application"
              description="Train-Ticket-Booking system built with java-springboot."
              ghLink="https://github.com/mohanmsgithub/Train-Ticket-Booking-Application"
               
            />
          </Col>

        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
