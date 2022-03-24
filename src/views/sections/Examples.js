import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function Examples() {
  return (
    <div className="section section-examples" data-background-color="black">
      <img
        alt="..."
        className="path"
        src={require("../../assets/img/path1.png").default}
      />
      <div className="space-50" />
      <Container className="text-center">
        <Row>
          <Col sm="6">
            <Link to="/partnership">
              <img
                alt="..."
                height={"400px"}
                className="img-raised"
                src={require("../../assets/img/partnership.png").default}
              />
            </Link>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="/partnership"
              tag={Link}
            >
              Let's Work Together
            </Button>
          </Col>
          <Col sm="6">
            <Link to="profile-page">
              <img
                alt="..."
                height={"400px"}
                className="img-raised"
                src={require("../../assets/img/careerPic.png").default}
              />
            </Link>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="career"
              tag={Link}
            >
              Career Oppetunities
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
