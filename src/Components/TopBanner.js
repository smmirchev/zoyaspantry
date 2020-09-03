import React, { Component } from "react";

class TopBanner extends Component {
  render() {
    return (
      <div className="top-banner-wrapper">
        <div className="info-cont-wrapper">
          <div className="info-cont">
            <h1 className="h1-l font-light">
              Your one stop{" "}
              <span class="font-bold">
                healthy
                <br /> &amp; organic
              </span>{" "}
              online store
            </h1>
            <h5 className="h5 font-regular text">
              From local products to fresh produce, our expert team members will
              help you with the groceries you know and love.
            </h5>
            <a
              href="https://zoyaspantry.com.au/product-category/pantry"
              className="btn rounded-btn explore"
            >
              Explore the range
            </a>
          </div>
        </div>
        <div className="svg-cont-wrapper">
          <img src="top-banner.svg" alt="logo" />
        </div>
      </div>
    );
  }
}

export default TopBanner;
