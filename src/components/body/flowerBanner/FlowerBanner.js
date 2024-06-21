import React from "react";
import "./FlowerBanner.css";

function FlowerBanner() {
  return (
    <>
      <img
        alt="flowerBannerImg"
        className="fBannerImg"
        src="./images/flowers.png"
      />
      <div
        style={{ bottom: "32px" }}
        className="d-flex flex-column justify-content-center text-center position-relative"
      >
        <span className="floBanHeadTxt">OUR SERVICES</span>
        <span className="floBanTxt">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem Ipsum is simply dummy text
        </span>
      </div>
    </>
  );
}
export default FlowerBanner;
