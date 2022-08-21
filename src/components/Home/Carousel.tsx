// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {Autoplay} from "swiper";
import {PRODUCTS_CORN} from "../../data/corn";
import {PRODUCTS_RAPESEED} from "../../data/rapeseed";
import {SITE_URL} from "../../constants";

const Carousel = () => {
  const slides = [...PRODUCTS_CORN, ...PRODUCTS_RAPESEED];

  return (
    <Swiper
      spaceBetween={50}
      loop={true}
      slidesPerView={1}
      loopedSlides={slides.length}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 3000000,
        disableOnInteraction: false
      }}
      breakpoints={{
        "@0.50": {
          slidesPerView: 3
        },
        "@1.00": {
          slidesPerView: 5
        }
      }}
      modules={[Autoplay]}
    >
      {slides.map((slideContent, index) => {
        return (
          <SwiperSlide key={index} virtualIndex={index}>
            <div className={"swiper-slide__container"}>
              <div className="swiper-slide__box">
                <div className="swiper-slide__title">
                  {slideContent.title}
                </div>
                <div className="swiper-slide__image" style={{backgroundImage: "url(" + SITE_URL + slideContent.image +")"}}/>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default Carousel