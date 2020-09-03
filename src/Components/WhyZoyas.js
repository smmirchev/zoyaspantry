import React, { Component } from "react";

class WhyZoyas extends Component {
  render() {
    return (
      <div className="why-zoyas">
        <div className="why-zoyas-grid">
          <div className="why-zoyas-title">
            <h2 class="h1 font-medium title">Why Zoya's?</h2>
          </div>
          <div className="why-zoyas-item zoyas-1">
            <img src="why-pig.svg" alt="piggy bank"></img>
            <h2 class="h2 font-medium">Affordable</h2>
          </div>
          <div className="why-zoyas-item zoyas-2">
            <img src="why-products.svg" alt="piggy bank"></img>
            <h2 class="h2 font-medium">Wide Range</h2>
          </div>
          <div className="why-zoyas-item zoyas-3">
            <img src="why-rocket.svg" alt="piggy bank"></img>
            <h2 class="h2 font-medium">Fast Delivery</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default WhyZoyas;
