import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./copyrights.css";

function CopyRights() {
  return (
    <Row className="g-0">
      <Col
        xs={12}
        className="d-flex justify-content-center align-items-center g-0 copyRightTxt"
      >
        <span>Copyright © 2024 eKADASA | Powered by eKADASA</span>
      </Col>
    </Row>
  );
}

export default CopyRights;
