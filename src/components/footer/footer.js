import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./footer.css";

function Footer() {
  return (
    <Row className="g-0" style={{ backgroundColor: "#383636eb" }}>
      <Col className="d-flex flex-column m-4" xs={3}>
        <span className="footerHedTxt mb-3"> ABOUT US</span>
        <img
          className="footerLogo mb-3"
          alt="logo"
          src="./images/logo.png"
        ></img>
        <span className="footTxt">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took
        </span>
      </Col>
      <Col className="d-flex flex-column m-4" xs={2}>
        <span className="footerHedTxt  mb-3">FREE SERVICES</span>
        <span className="footTxt mb-2">Free Food </span>
        <span className="footTxt mb-2">Free Medicine (Siddha) </span>
        <span className="footTxt mb-2">Free Ambulance service</span>
        <span className="footTxt mb-2">Free scholarship</span>
        <span className="footTxt mb-2">Free books </span>
        <span className="footTxt mb-2">Free Stationery </span>
      </Col>
      <Col className="d-flex flex-column m-4" xs={2}>
        <span className="footerHedTxt  mb-3"> OTHER SERVICES</span>
        <span className="footTxt mb-2">Free Food </span>
        <span className="footTxt mb-2">Free Medicine (Siddha) </span>
        <span className="footTxt mb-2">Free Ambulance service</span>
        <span className="footTxt mb-2">Free scholarship</span>
        <span className="footTxt mb-2">Free books </span>
        <span className="footTxt mb-2">Free Stationery </span>
      </Col>
      <Col className="d-flex flex-column m-4" xs={3}>
        <span className="footerHedTxt  mb-3">SUBSCRIBE</span>
        <span className="footTxt mb-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took
        </span>
        <input className="form-control mb-2" type="text"></input>
        <div className="d-grid gap-2 d-md-block">
          <button className="btn btn-primary" type="button">
            Subscribe
          </button>
        </div>
      </Col>
    </Row>
  );
}

export default Footer;
