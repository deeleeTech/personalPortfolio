import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const blogPosts = [
  {
    src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6915061537866981376',
    title: 'WebDev',
    color: 'blue'
  },
];

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
          {/* {blogPosts && blogPosts.map((each)=>{
            return(
              <Col lg="8" md="12">
                  <iframe src={each.src} style={{ width: '100%' }} frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
              </Col>
            )
          })} */}
        </Row>
      </Container>
    </div>
  );
}
