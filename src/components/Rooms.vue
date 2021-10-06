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
            :spaceBetween="30"
            :slidesPerView="'auto'"
            :loop="true"
            :speed="800"
            :loopAdditionalSlides="5"
            :preloadImages="false"
            :parallax="true"
          >
            <SwiperSlide>
              <div class="slider-rooms__image _ibg">
                <img :src="getImgUrl('01.jpg')" alt="Room image" />
              </div>
              <a
                href=""
                data-swiper-parallax-opacity="0"
                data-swiper-parallax-x="100%"
                class="slider-rooms__content _icon-arrow-link"
              >
                <div class="slider-rooms__label label-slider">
                  <div class="label-slider__number">01</div>
                  <div class="label-slider__line"></div>
                  <div class="label-slider__text">Bed Room</div>
                </div>
                <div class="slider-rooms__title">Inner Peace</div>
              </a>
            </SwiperSlide>

            <SwiperSlide>
              <div class="slider-rooms__image _ibg">
                <img :src="getImgUrl('02.jpg')" alt="Room image" />
              </div>
              <a
                href=""
                data-swiper-parallax-opacity="0"
                data-swiper-parallax-x="100%"
                class="slider-rooms__content _icon-arrow-link"
              >
                <div class="slider-rooms__label label-slider">
                  <div class="label-slider__number">02</div>
                  <div class="label-slider__line"></div>
                  <div class="label-slider__text">Bed Room</div>
                </div>
                <div class="slider-rooms__title">Inner Peace</div>
              </a>
            </SwiperSlide>

            <SwiperSlide>
              <div class="slider-rooms__image _ibg">
                <img :src="getImgUrl('03.jpg')" alt="Room image" />
              </div>
              <a
                href=""
                data-swiper-parallax-opacity="0"
                data-swiper-parallax-x="100%"
                class="slider-rooms__content _icon-arrow-link"
              >
                <div class="slider-rooms__label label-slider">
                  <div class="label-slider__number">03</div>
                  <div class="label-slider__line"></div>
                  <div class="label-slider__text">Bed Room</div>
                </div>
                <div class="slider-rooms__title">Inner Peace</div>
              </a>
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
      return require("@/assets/img/rooms/" + imageName);
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

.slider-rooms {
  position: relative;

  .swiper-container {
    overflow: visible;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      height: 100%;
      width: 100vw;
      left: 0;
      background-color: #fcf8f3;
      z-index: 2;
      transform: translate(-100%, 0px);
    }
  }

  .swiper-slide {
    width: 370px;
    position: relative;
    overflow: hidden;
    min-height: 500px;

    .slider-rooms__content {
      pointer-events: none;
    }

    &-active {
      .slider-rooms__content {
        pointer-events: auto;
      }

      .slider-rooms__image {
        padding-bottom: 500px/370px * 100%;
      }
    }
  }

  &__image {
    transition: padding 0.8s ease 0s;
    height: 100%;
    padding-bottom: 400px/370px * 100%;

    @media (mix-width: $md3 + px) {
      height: 83%;
    }
  }

  &__content {
    position: absolute;
    color: inherit;
    max-width: 240px;
    left: 20px;
    bottom: 20px;
    padding: 16px;
    background: rgba(255, 255, 255, 0.7);

    &::before {
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(100%, 0px);
      width: 48px;
      height: 48px;
      background-color: $orangeColor;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &__title {
    font-weight: 600;
    font-size: 24px;
  }

  &__arrows {
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    width: calc(100% + 42px);
    left: -24px;
    z-index: 5;
    justify-content: space-between;

    .slider-arrow {
      pointer-events: auto;
    }
  }

  &__dots {
    z-index: 5;

    @media (min-width: $md3 + px) {
      position: absolute;
      bottom: 30px;
      width: 100%;
      left: 400px;
    }
  }
}

.label-slider {
  display: grid;
  color: $darkGrayColor;
  gap: 8px;
  align-items: center;
  justify-content: start;
  grid-template-columns: auto 27px auto;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &__line {
    height: 1px;
    background-color: $darkGrayColor;
  }
}
</style>
