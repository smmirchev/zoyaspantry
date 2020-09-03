import React, { Component } from "react";
import { FaRegHeart } from "react-icons/fa";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: "Batman",
    };
  }
  render() {
    return (
      <div className="products-wrapper">
        <div className="titles active">
          <h2 className="h1 font-light">
            <span className="font-bold">Free</span> shipping +{" "}
            <span className="font-bold">Surprise</span> gift
          </h2>
          <h2 className="h1 font-light">On all orders over $100</h2>
        </div>
        <div className="products-cont">
          <div className="products-cont-title">
            <h2 className="h1 font-medium">
              Our special
              <br />
              offers
            </h2>
            <a href="/" className="btn view-all-btn">
              View all
            </a>
          </div>
          <div className="category-products">
            <div className="type-product">
              <div className="type-product-heart">
                <a href="/">
                  <FaRegHeart size={24} />
                </a>
              </div>
              <div className="type-product-image">
                <a href="/">
                  <img src="products/product-1.jpg" alt=""></img>
                  {/* <img src="top-banner.svg" alt=""></img> */}
                </a>
              </div>
              <div className="type-product-info">
                <p class="type-product-info-p">Mediterranean Essentials</p>
                <h5 class="type-product-info-h5">Stone Ground Tahini 400g</h5>
              </div>
              <div className="type-product-bottom">
                <a href="/">
                  <div className="type-product-price">
                    <h4 className="h4 font-medium">$6.00 </h4>
                  </div>
                </a>
                <a href="/" className="type-product-button rounded-btn">
                  Add to Bag
                </a>
              </div>
            </div>
            <div className="type-product">
              <div className="type-product-heart">
                <a href="/">
                  <FaRegHeart size={24} />
                </a>
              </div>
              <div className="type-product-image">
                <a href="/">
                  <img src="products/product-2.jpg" alt=""></img>
                  {/* <img src="top-banner.svg" alt=""></img> */}
                </a>
              </div>
              <div className="type-product-info">
                <p class="type-product-info-p">Gourmet Condiments</p>
                <h5 class="type-product-info-h5">Pomegranate Glaze 150mL</h5>
              </div>
              <div className="type-product-bottom">
                <a href="/">
                  <div className="type-product-price">
                    <h4 className="h4 font-medium">$7.00 </h4>
                  </div>
                </a>
                <a href="/" className="type-product-button rounded-btn">
                  Add to Bag
                </a>
              </div>
            </div>
            <div className="type-product">
              <div className="type-product-heart">
                <a href="/">
                  <FaRegHeart size={24} />
                </a>
              </div>
              <div className="type-product-image">
                <a href="/">
                  <img src="products/product-3.jpg" alt=""></img>
                  {/* <img src="top-banner.svg" alt=""></img> */}
                </a>
              </div>
              <div className="type-product-info">
                <p class="type-product-info-p">Salt &amp; Spices</p>
                <h5 class="type-product-info-h5">Chilli Salt Flakes 500g</h5>
              </div>
              <div className="type-product-bottom">
                <a href="/">
                  <div className="type-product-price">
                    <h4 className="h4 font-medium">$18.00 </h4>
                  </div>
                </a>
                <a href="/" className="type-product-button rounded-btn">
                  Add to Bag
                </a>
              </div>
            </div>
            <div className="type-product">
              <div className="type-product-heart">
                <a href="/">
                  <FaRegHeart size={24} />
                </a>
              </div>
              <div className="type-product-image">
                <a href="/">
                  <img src="products/product-4.jpg" alt=""></img>
                  {/* <img src="top-banner.svg" alt=""></img> */}
                </a>
              </div>
              <div className="type-product-info">
                <p class="type-product-info-p">Artisan Oils</p>
                <h5 class="type-product-info-h5">
                  Org. Extra Virgin Olive Oil 3L
                </h5>
              </div>
              <div className="type-product-bottom">
                <a href="/">
                  <div className="type-product-price">
                    <h4 className="h4 font-medium">$38.00 </h4>
                  </div>
                </a>
                <a href="/" className="type-product-button rounded-btn">
                  Add to Bag
                </a>
              </div>
            </div>
            <div className="type-product">
              <div className="type-product-heart">
                <a href="/">
                  <FaRegHeart size={24} />
                </a>
              </div>
              <div className="type-product-image">
                <a href="/">
                  <img src="products/product-5.jpg" alt=""></img>
                  {/* <img src="top-banner.svg" alt=""></img> */}
                </a>
              </div>
              <div className="type-product-info">
                <p class="type-product-info-p">Organic Coconut Product</p>
                <h5 class="type-product-info-h5">Organic Coconut Water 1L</h5>
              </div>
              <div className="type-product-bottom">
                <a href="/">
                  <div className="type-product-price">
                    <h4 className="h4 font-medium">$4.50 </h4>
                  </div>
                </a>
                <a href="/" className="type-product-button rounded-btn">
                  Add to Bag
                </a>
              </div>
            </div>
            <div className="type-product">
              <div className="type-product-heart">
                <a href="/">
                  <FaRegHeart size={24} />
                </a>
              </div>
              <div className="type-product-image">
                <a href="/">
                  <img src="products/product-6.jpg" alt=""></img>
                  {/* <img src="top-banner.svg" alt=""></img> */}
                </a>
              </div>
              <div className="type-product-info">
                <p class="type-product-info-p">Salt &amp; Spices</p>
                <h5 class="type-product-info-h5">
                  Mediterranean Style BBQ Rubs 110g
                </h5>
              </div>
              <div className="type-product-bottom">
                <a href="/">
                  <div className="type-product-price">
                    <h4 className="h4 font-medium">$5.50 </h4>
                  </div>
                </a>
                <a href="/" className="type-product-button rounded-btn">
                  Add to Bag
                </a>
              </div>
            </div>
            <div className="type-product">
              <div className="type-product-heart">
                <a href="/">
                  <FaRegHeart size={24} />
                </a>
              </div>
              <div className="type-product-image">
                <a href="/">
                  <img src="products/product-7.jpg" alt=""></img>
                  {/* <img src="top-banner.svg" alt=""></img> */}
                </a>
              </div>
              <div className="type-product-info">
                <p class="type-product-info-p">Organic Beans &amp; Lentils</p>
                <h5 class="type-product-info-h5">Organic Adzuki Beans 500g</h5>
              </div>
              <div className="type-product-bottom">
                <a href="/">
                  <div className="type-product-price">
                    <h4 className="h4 font-medium">$4.50 </h4>
                  </div>
                </a>
                <a href="/" className="type-product-button rounded-btn">
                  Add to Bag
                </a>
              </div>
            </div>
            <div className="type-product">
              <div className="type-product-heart">
                <a href="/">
                  <FaRegHeart size={24} />
                </a>
              </div>
              <div className="type-product-image">
                <a href="/">
                  <img src="products/product-8.jpg" alt=""></img>
                  {/* <img src="top-banner.svg" alt=""></img> */}
                </a>
              </div>
              <div className="type-product-info">
                <p class="type-product-info-p">Mediterranean Essentials</p>
                <h5 class="type-product-info-h5">
                  Chef's Choice Pomegranate Molasses 250mL
                </h5>
              </div>
              <div className="type-product-bottom">
                <a href="/">
                  <div className="type-product-price">
                    <h4 className="h4 font-medium">$6.00 </h4>
                  </div>
                </a>
                <a href="/" className="type-product-button rounded-btn">
                  Add to Bag
                </a>
              </div>
            </div>
            <div className="type-product">
              <div className="type-product-heart">
                <a href="/">
                  <FaRegHeart size={24} />
                </a>
              </div>
              <div className="type-product-image">
                <a href="/">
                  <img src="products/product-9.jpg" alt=""></img>
                  {/* <img src="top-banner.svg" alt=""></img> */}
                </a>
              </div>
              <div className="type-product-info">
                <p class="type-product-info-p">Seeds &amp; Grains</p>
                <h5 class="type-product-info-h5">Organic Popping Corn 500g</h5>
              </div>
              <div className="type-product-bottom">
                <a href="/">
                  <div className="type-product-price">
                    <h4 className="h4 font-medium">$4.50 </h4>
                  </div>
                </a>
                <a href="/" className="type-product-button rounded-btn">
                  Add to Bag
                </a>
              </div>
            </div>
            <div className="type-product">
              <div className="type-product-heart">
                <a href="/">
                  <FaRegHeart size={24} />
                </a>
              </div>
              <div className="type-product-image">
                <a href="/">
                  <img src="products/product-10.jpg" alt=""></img>
                  {/* <img src="top-banner.svg" alt=""></img> */}
                </a>
              </div>
              <div className="type-product-info">
                <p class="type-product-info-p">Rices</p>
                <h5 class="type-product-info-h5">Organic Basmati Rice 1Kg</h5>
              </div>
              <div className="type-product-bottom">
                <a href="/">
                  <div className="type-product-price">
                    <h4 className="h4 font-medium">$6.50 </h4>
                  </div>
                </a>
                <a href="/" className="type-product-button rounded-btn">
                  Add to Bag
                </a>
              </div>
            </div>
            <div className="type-product">
              <div className="type-product-heart">
                <a href="/">
                  <FaRegHeart size={24} />
                </a>
              </div>
              <div className="type-product-image">
                <a href="/">
                  <img src="products/product-11.jpg" alt=""></img>
                  {/* <img src="top-banner.svg" alt=""></img> */}
                </a>
              </div>
              <div className="type-product-info">
                <p class="type-product-info-p">Pickles &amp; Preserves</p>
                <h5 class="type-product-info-h5">Sliced Jalapenos 480g</h5>
              </div>
              <div className="type-product-bottom">
                <a href="/">
                  <div className="type-product-price">
                    <h4 className="h4 font-medium">$4.00 </h4>
                  </div>
                </a>
                <a href="/" className="type-product-button rounded-btn">
                  Add to Bag
                </a>
              </div>
            </div>
            <div className="type-product">
              <div className="type-product-heart">
                <a href="/">
                  <FaRegHeart size={24} />
                </a>
              </div>
              <div className="type-product-image">
                <a href="/">
                  <img src="products/product-12.jpg" alt=""></img>
                  {/* <img src="top-banner.svg" alt=""></img> */}
                </a>
              </div>
              <div className="type-product-info">
                <p class="type-product-info-p">Salt &amp; Spices</p>
                <h5 class="type-product-info-h5">
                  Pink Fine Salt Standing Pouch 1Kg
                </h5>
              </div>
              <div className="type-product-bottom">
                <a href="/">
                  <div className="type-product-price">
                    <h4 className="h4 font-medium">$4.50 </h4>
                  </div>
                </a>
                <a href="/" className="type-product-button rounded-btn">
                  Add to Bag
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
