<template>
  <div class="tips">
    <div class="tips__container _container">
      <h2 class="tips__title _title">Tips & Tricks</h2>
      <div class="tips__slider slider-tips">
        <div class="slider-tips__body">
          <Swiper
            :navigation="swiperNavigation"
            :pagination="swiperPagination"
            :spaceBetween="30"
            :slidesPerView="3"
            :loop="true"
            :speed="800"
          >
            <SwiperSlide>
              <a href="" class="slider-tips__image _ibg">
                <img src="img/tips/01.jpg" alt="" />
              </a>
              <div class="slider-tips__content">
                <a href="" class="slider-tips__title"
                  >How to create a living room to love</a
                >
                <div class="slider-tips__text">20 jan 2020</div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div class="slider-tips__dots"></div>
          <div class="slider-tips__arrows slider-arrows">
            <button
              type="button"
              class="slider-arrow slider-arrow--white slider-arrow--prev _icon-arrow-down"
            ></button>
            <button
              type="button"
              class="slider-arrow slider-arrow--white slider-arrow--next _icon-arrow-down"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Parallax]);

export default {
  name: "Tips",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperPagination: {
        clickable: true,
        el: ".slider-tips__dots",
      },
      swiperNavigation: {
        nextEl: ".slider-tips .slider-arrow--next",
        prevEl: ".slider-tips .slider-arrow--prev",
      },
    };
  },
};
</script>

<style lang="scss"></style>
