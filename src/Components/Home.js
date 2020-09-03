import React, { Component } from "react";
import { FaArrowRight } from "react-icons/fa";

import TopBanner from "./TopBanner";
import ShopCat from "./ShopCat";
import Products from "./Products";
import Brands from "./Brands";
import WhyZoyas from "./WhyZoyas";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: "Batman",
    };
  }
  render() {
    return (
      <div className="home-content">
        <section className="top-banner anim">
          <TopBanner />
        </section>
        <section className="shop-cat">
          <ShopCat />
        </section>
        <section className="products">
          <Products />
        </section>
        <section className="brands">
          <Brands />
        </section>
        <WhyZoyas />
        <div className="stay-in">
          <div className="stay-in-title">
            <h2 className="h1 font-medium">Let’s stay in touch</h2>
          </div>
          <aside className="widget-area">
            <form action="#" method="post">
              <label>
                <input
                  className="widget-area-email"
                  type="text"
                  name="email"
                  value=""
                  placeholder="Email"
                  required=""
                ></input>
              </label>
              <button
                type="submit"
                name="submit"
                className="widget-area-submit"
              >
                <FaArrowRight size={24} />
              </button>
            </form>
          </aside>
        </div>
      </div>
    );
  }
}

export default Home;
