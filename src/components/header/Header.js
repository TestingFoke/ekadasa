import "./Header.css";
import React from "react";
import Top from "./Top/Top";
import Banner from "./Banner/Banner";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <Row>
      <Col xs={12}>
        <Top />
        <Banner />
      </Col>
    </Row>
  );
}

export default Header;
