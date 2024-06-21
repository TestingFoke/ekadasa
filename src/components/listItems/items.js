import React from "react";
import "./items.css";
import Col from "react-bootstrap/Col";

function Items(props) {
  return (
    <Col xs={6} className="d-flex g-0 px-4 py-3">
      <div className="d-flex flex-column itemBg p-3">
        <span className="itemHedTxt mb-2">{props.curObj.heading}</span>
        <span className="itemDetailTxt mb-2">{props.curObj.detail}</span>
        <span className="itemDescTxt mb-4">{props.curObj.describtion}</span>
        <span className="badge rounded-pill text-bg-secondary readMore">
          Read More..
        </span>
      </div>
      <img alt="iteam" src={props.curObj.image} />
    </Col>
  );
}

export default Items;
