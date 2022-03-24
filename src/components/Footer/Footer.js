import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <h1 className="title">•DeeLeeTech•</h1>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/partnership" tag={Link}>
                  Small Business / Entrepanuers
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/career" tag={Link}>
                  Career Oppertunities
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact" tag={Link}>
                  Contact Me
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            {/* <Nav>
              <NavItem>
                <NavLink target="_blank" rel="noopener noreferrer" href="https://www.ibm.com/topics/custom-software-development#:~:text=Custom%20software%20development%20is%20important,maintaining%20and%20modifying%20commercial%20software">
                  Tech In Start Ups
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" rel="noopener noreferrer" href="https://www.mindbowser.com/react-vs-wordpress/#:~:text=Applications%20and%20content%20developed%20with%20React.,modularity%20leads%20to%20greater%20usability">
                  Javascript VS Wordpress
                </NavLink>
              </NavItem>
            </Nav> */}
          </Col>
          <Col md="3">
            <h3 className="title">Follow Me:</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://twitter.com/deeleetech"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Follow Me
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://github.com/deeleeTech"
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-github" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.linkedin.com/in/dillon-l-24ba3b1a9/"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450378">
                Follow Me
              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
