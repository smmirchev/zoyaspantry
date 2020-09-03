import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
class Brands extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: "Batman",
    };
  }
  render() {
    return (
      <div className="brands-wrapper">
        <div className="brands-title">
          <h2 className="h1 font-medium">Our brands</h2>
        </div>
        <div className="brands-slider grab">
          <Swiper spaceBetween={10} slidesPerView={6}>
            <SwiperSlide>
              <div className="brand-slide grab"> </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-slide grab"> </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-slide">
                <a
                  href="https://zoyaspantry.com.au/brand/chiefs-choice/"
                  className="swiper-slide slide-first"
                >
                  <div className="img">
                    <img src="slider/brand-1.png" alt=""></img>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-slide">
                <a
                  href="https://zoyaspantry.com.au/brand/la-tourangelle/"
                  className="swiper-slide slide-first"
                >
                  <div className="img">
                    <img src="slider/brand-2.png" alt=""></img>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-slide">
                <a
                  href="https://zoyaspantry.com.au/brand/nortindal/"
                  className="swiper-slide slide-first"
                >
                  <div className="img">
                    <img src="slider/brand-3.png" alt=""></img>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-slide">
                <a
                  href="https://zoyaspantry.com.au/brand/plantin/"
                  className="swiper-slide slide-first"
                >
                  <div className="img">
                    <img src="slider/brand-4.svg" alt=""></img>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-slide">
                <a
                  href="https://zoyaspantry.com.au/brand/sicam/"
                  className="swiper-slide slide-first"
                >
                  <div className="img">
                    <img src="slider/brand-5.png" alt=""></img>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-slide">
                <a
                  href="https://zoyaspantry.com.au/brand/talatta/"
                  className="swiper-slide slide-first"
                >
                  <div className="img">
                    <img src="slider/brand-6.png" alt=""></img>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-slide">
                <a
                  href="https://zoyaspantry.com.au/brand/three-olives/"
                  className="swiper-slide slide-first"
                >
                  <div className="img">
                    <img src="slider/brand-7.png" alt=""></img>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
  }
}

export default Brands;
