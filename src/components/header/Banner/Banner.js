import React from "react";
import "./Banner.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

function Banner() {
  return (
    <Row>
      <Col xs={12}>
        <Carousel controls={false} interval={1000}>
          <Carousel.Item>
            <img
              alt="banner1"
              className="bannerImg"
              src="./images/banner_1.png"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              alt="banner2"
              className="bannerImg"
              src="./images/banner_2.png"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              alt="banner3"
              className="bannerImg"
              src="./images/banner_3.png"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              alt="banner4"
              className="bannerImg"
              src="./images/banner_4.png"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
}

export default Banner;
