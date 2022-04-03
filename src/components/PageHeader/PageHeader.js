import React from "react";

// reactstrap components
import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo" style={{ fontSize: '60px' }}>•DeeLeeTech•</h1>
          <h3 className="d-none d-sm-block">
            Dedicated to helping small business and Entrepreneurs scale, automate, and streamline processes with custom coding solutions
          </h3>
        </div>
      </Container>
    </div>
  );
}
