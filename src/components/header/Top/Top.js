import "./Top.css";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Top() {
  const menuList = [
    { id: 1, name: "FREE PRASAD" },
    { id: 2, name: "REIKI" },
    { id: 3, name: "AGASTHIYAR BOOKS" },
    { id: 4, name: "ABOUT US" },
    { id: 5, name: "CONTACT US" },
  ];
  return (
    <Row>
      <Col xs="12" className="d-flex flex-column">
        <img className="bgBanner" alt="bg1" src="./images/bg_1.png" />
        <img className="bgBanner" alt="bg1" src="./images/banner_line.png" />
        <img className="bgBanner" alt="bg1" src="./images/bg_2.png" />
      </Col>
      <Col xs="12" className="d-flex position-absolute pt-1">
        <Col md="2" className="text-end">
          <img alt="logo" src="./images/logo.png"></img>
        </Col>
        <Col className="g-0 pt-2 d-flex flex-column" md="4">
          <span className="companyNameTxt">EKADASA RUDRA CHARITABLE TRUST</span>
          <span className="addressTxt">
            No.10 N.G.O. colony 1st street, melagaram,Tenkasi district,
            tamilnadu- 627 808
          </span>
        </Col>
        <Col className="g-0 pt-2 d-flex" md="4">
          <div className="iconContainer">
            <i className="bi-envelope icon"></i>
          </div>
          <div className="d-flex flex-column">
            <span className="infoHedTxt">Mail Us</span>
            <span className="infoTxt">
              srinagaagastheeswarmeditation@gmail.com{" "}
            </span>
          </div>
        </Col>
        <Col className="g-0 pt-2 d-flex" md="2">
          <div className="iconContainer">
            <i className="bi-telephone icon"></i>
          </div>
          <div className="d-flex flex-column">
            <span className="infoHedTxt">Call Us</span>
            <span className="infoTxt">+65 8156 5365</span>
          </div>
        </Col>
      </Col>
      <Col
        style={{ top: "82px" }}
        xs="12"
        className="d-flex justify-content-center  position-absolute "
      >
        {menuList.map((obj, index) => (
          <span key={index} className="menuTxt">
            {obj.name}{" "}
            {menuList.length - 1 > index ? (
              <span className="seperator px-3"> | </span>
            ) : null}
          </span>
        ))}
      </Col>
    </Row>
  );
}

export default Top;
