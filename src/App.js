import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/header/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import Body from "./components/body/Body";
import ListItems from "./components/listItems/ListItems";
import Footer from "./components/footer/footer";
import CopyRights from "./components/copyrights/copyrights";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} className="g-0">
            <Header />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="g-0">
            <Body />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="g-0">
            <ListItems />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="g-0">
            <Footer></Footer>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="g-0">
            <CopyRights />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
