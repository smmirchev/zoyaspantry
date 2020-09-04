import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

class ShopCat extends Component {
  render() {
    return (
      <div className="shop-cat-wrapper">
        <div className="cat-slider">
          <div className="swiper-wrapper grab">
            <Swiper spaceBetween={50} slidesPerView={2}>
              <SwiperSlide>
                <div className="shop-cat-header swiper-slide">
                  <h2 className="h1 font-medium shop-by">
                    Shop <br />
                    by category{" "}
                  </h2>
                  <a
                    href="https://zoyaspantry.com.au/shop"
                    className="btn view-all-btn"
                  >
                    View all categories
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://zoyaspantry.com.au/product-category/pantry/artisan-oils/"
                  className="swiper-slide slide-first"
                >
                  <div className="img">
                    <img src="slider/slide-1.png" alt=""></img>
                  </div>
                  <h2 className="h2 font-medium">Artisan Oils</h2>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://zoyaspantry.com.au/product-category/pantry/breakfast-favourites/"
                  className="swiper-slide cats"
                >
                  <div className="img">
                    <img src="slider/slide-2.png" alt=""></img>
                  </div>
                  <h2 className="h2 font-medium">Breakfast Favourites</h2>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://zoyaspantry.com.au/product-category/pantry/extracts-flavours/"
                  className="swiper-slide cats"
                >
                  <div className="img">
                    <img src="slider/slide-3.png" alt=""></img>
                  </div>
                  <h2 className="h2 font-medium">Extracts &amp; Flavours</h2>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://zoyaspantry.com.au/product-category/pantry/french-traditional-sauces/"
                  className="swiper-slide cats"
                >
                  <div className="img">
                    <img src="slider/slide-4.png" alt=""></img>
                  </div>
                  <h2 className="h2 font-medium">French Traditional Sauces</h2>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://zoyaspantry.com.au/product-category/pantry/french-truffles/"
                  className="swiper-slide cats"
                >
                  <div className="img">
                    <img src="slider/slide-5.png" alt=""></img>
                  </div>
                  <h2 className="h2 font-medium">French Truffles</h2>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://zoyaspantry.com.au/product-category/pantry/gourmet-condiments/"
                  className="swiper-slide cats"
                >
                  <div className="img">
                    <img src="slider/slide-6.png" alt=""></img>
                  </div>
                  <h2 className="h2 font-medium">Gourmet Condiments</h2>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://zoyaspantry.com.au/product-category/pantry/gourmet-essentials/"
                  className="swiper-slide cats"
                >
                  <div className="img">
                    <img src="slider/slide-7.png" alt=""></img>
                  </div>
                  <h2 className="h2 font-medium">Gourmet Essentials</h2>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://zoyaspantry.com.au/product-category/pantry/middle-eastern-essentials/"
                  className="swiper-slide cats"
                >
                  <div className="img">
                    <img src="slider/slide-8.png" alt=""></img>
                  </div>
                  <h2 className="h2 font-medium">Mediterranean Essentials</h2>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://zoyaspantry.com.au/product-category/pantry/organic-beans-lentils/"
                  className="swiper-slide cats"
                >
                  <div className="img">
                    <img src="slider/slide-9.png" alt=""></img>
                  </div>
                  <h2 className="h2 font-medium">
                    Organic Beans &amp; Lentils
                  </h2>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://zoyaspantry.com.au/product-category/pantry/organic-cacao-chocolates/"
                  className="swiper-slide cats"
                >
                  <div className="img">
                    <img src="slider/slide-10.png" alt=""></img>
                  </div>
                  <h2 className="h2 font-medium">
                    Organic Cacao &amp; Chocolates
                  </h2>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://zoyaspantry.com.au/product-category/pantry/organic-canned-vegetables-tomatoes/"
                  className="swiper-slide cats"
                >
                  <div className="img">
                    <img src="slider/slide-11.png" alt=""></img>
                  </div>
                  <h2 className="h2 font-medium">
                    Organic Canned Vegetables &amp; Tomatoes
                  </h2>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://zoyaspantry.com.au/product-category/pantry/organiccoconutproduct/"
                  className="swiper-slide cats"
                >
                  <div className="img">
                    <img src="slider/slide-12.png" alt=""></img>
                  </div>
                  <h2 className="h2 font-medium">Organic Coconut Product</h2>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://zoyaspantry.com.au/product-category/pantry/organic-juices/"
                  className="swiper-slide cats swiper-slide-active"
                >
                  <div className="img">
                    <img src="slider/slide-13.png" alt=""></img>
                  </div>
                  <h2 className="h2 font-medium">Organic Juices</h2>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://zoyaspantry.com.au/product-category/pantry/organic-noodles/"
                  className="swiper-slide cats swiper-slide-next"
                >
                  <div className="img">
                    <img src="slider/slide-14.jpg" alt=""></img>
                  </div>
                  <h2 className="h2 font-medium">Organic Noodles</h2>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://zoyaspantry.com.au/product-category/pantry/organic-noodles/"
                  className="swiper-slide cats swiper-slide-next"
                >
                  <div className="img">
                    <img src="slider/slide-15.png" alt=""></img>
                  </div>
                  <h2 className="h2 font-medium">Organic Noodles</h2>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://zoyaspantry.com.au/product-category/pantry/ready-to-cook-mixes/"
                  className="swiper-slide cats"
                >
                  <div className="img">
                    <img src="slider/slide-16.png" alt=""></img>
                  </div>
                  <h2 className="h2 font-medium">Ready to Cook Mixes</h2>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://zoyaspantry.com.au/product-category/pantry/rices/"
                  className="swiper-slide cats swiper-slide-next"
                >
                  <div className="img">
                    <img src="slider/slide-17.png" alt=""></img>
                  </div>
                  <h2 className="h2 font-medium">Rices</h2>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://zoyaspantry.com.au/product-category/pantry/salt-spices/"
                  className="swiper-slide cats"
                >
                  <div className="img">
                    <img src="slider/slide-18.png" alt=""></img>
                  </div>
                  <h2 className="h2 font-medium">Salt &amp; Spices</h2>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://zoyaspantry.com.au/product-category/pantry/seeds-grains/"
                  className="swiper-slide cats"
                >
                  <div className="img">
                    <img src="slider/slide-19.png" alt=""></img>
                  </div>
                  <h2 className="h2 font-medium">Seeds &amp; Grains</h2>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://zoyaspantry.com.au/product-category/pantry/sugars-sweetners-syrups/"
                  className="swiper-slide cats"
                >
                  <div className="img">
                    <img src="slider/slide-20.png" alt=""></img>
                  </div>
                  <h2 className="h2 font-medium">
                    Sugars, Sweetners &amp; Syrups
                  </h2>
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopCat;
