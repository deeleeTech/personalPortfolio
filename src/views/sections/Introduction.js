import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function Introduction() {
  return (
    <div className="section section-nucleo-icons">
      <img
        alt="..."
        className="path"
        src={require("../../assets/img/path3.png").default}
      />
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="12">
            <h2 className="title">A Polyglot Programmer At Your Fingertips</h2>
            <h4 className="description">
            •DeeLeeTech• is first and formost a helping hand for tech. Saving you time and money across an infinite possibity of choices requires upfront time I am willing invest free of any charge &#x263A; My mission is to use my custom code to save people time and money, while offering advice on technology in general.
            </h4>
          </Col>
        </Row>
        <div className="blur-hover">
          {/* <a href="/#"> */}
            <div className="icons-container blur-item on-screen mt-5">
              {/* Center */}
              <i className="icon tim-icons icon-coins" />
              {/* Right 1 */}
              <i className="icon icon-sm tim-icons icon-spaceship" />
              <i className="icon icon-sm tim-icons icon-money-coins" />
              <i className="icon icon-sm tim-icons icon-link-72" />
              {/* Right 2 */}
              <i className="icon tim-icons icon-send" />
              <i className="icon tim-icons icon-mobile" />
              <i className="icon tim-icons icon-wifi" />
              {/* Left 1 */}
              <i className="icon icon-sm tim-icons icon-key-25" />
              <i className="icon icon-sm tim-icons icon-atom" />
              <i className="icon icon-sm tim-icons icon-satisfied" />
              {/* Left 2 */}
              <i className="icon tim-icons icon-gift-2" />
              <i className="icon tim-icons icon-tap-02" />
              <i className="icon tim-icons icon-wallet-43" />
            </div>
            <span className="blur-hidden h5 text-primary">
              Let's Create Something That Fits You
            </span>
          {/* </a> */}
        </div>
      </Container>
    </div>
  );
}
