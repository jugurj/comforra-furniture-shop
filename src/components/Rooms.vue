<template>
  <div class="rooms">
    <div class="rooms__container _container">
      <div class="rooms__body">
        <h2 class="rooms__title _title">50+ Beautiful rooms inspiration</h2>
        <div class="rooms__text">
          Our designer already made a lot of beautiful prototype of rooms that
          inspire you
        </div>
        <a href="" class="rooms__button btn">Explore More</a>
      </div>

      <div class="rooms__slider slider-rooms">
        <div class="slider-rooms__body">
          <Swiper
            :navigation="swiperNavigation"
            :pagination="swiperPagination"
            :spaceBetween="24"
            :slidesPerView="'auto'"
            :loop="true"
            :speed="800"
            :loopAdditionalSlides="5"
            :preloadImages="false"
            :parallax="true"
          >
            <SwiperSlide>
              <div class="slider-rooms__slide">
                <div class="slider-tooms__image _ibg">
                  <img :src="getImgUrl('01.jpg')" alt="Room image" />
                </div>
                <a href="" class="slider-rooms__content _icon-arrow-link">
                  <div class="slider-rooms__label label-slider">
                    <div class="label-slider__number">01</div>
                    <div class="label-slider__line"></div>
                    <div class="label-slider__text">Bed Room</div>
                  </div>
                  <div class="slider-rooms__title">Inner Peace</div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="slider-rooms__arrows slider-arrows">
          <button
            type="button"
            class="slider-arrow slider-arrow--white slider-arrow--prev _icon-arrow-down"
          ></button>
          <button
            type="button"
            class="slider-arrow slider-arrow--white slider-arrow--next _icon-arrow-down"
          ></button>
        </div>
        <div class="slider-rooms__dots"></div>
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
  name: "Rooms",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperPagination: {
        clickable: true,
        el: ".slider-rooms__dots",
      },
      swiperNavigation: {
        nextEl: ".slider-rooms .slider-arrow--next",
        prevEl: ".slider-rooms .slider-arrow--prev",
      },
    };
  },
  methods: {
    getImgUrl(imageName) {
      return require("../assets/img/rooms/" + imageName);
    },
  },
};
</script>

<style lang="scss">
.rooms {
  background: #fcf8f3;
  padding: 40px 0;

  &__container {
    @media (min-width: $md2 + px) {
      display: flex;
    }
  }

  &__body {
    flex: 0 0 465 / 1240 * 100%;
    position: relative;
    z-index: 5;
    align-self: center;

    @media (min-width: $md2 + px) {
      padding-right: 40px;
    }
  }

  &__title {
    margin-bottom: 20px;
    text-align: left;
  }

  &__text {
    line-height: 1.5;
    font-weight: 500;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__button {
    background-color: $orangeColor;
    color: #fff;
    min-width: 180px;

    &:hover {
      background-color: darken($orangeColor, 10%);
    }
  }

  &__slider {
    flex: 1 1 auto;
    min-width: 0;
    align-self: flex-start;
  }
}
</style>
