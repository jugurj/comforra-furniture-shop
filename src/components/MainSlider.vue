<template>
  <div class="main-slider">
    <div class="main-slider__container _container">
      <div class="main-slider__body">
        <div class="main-slider__content content-main">
          <h1 class="content-main__title">
            High-Quality Furniture Just For You
          </h1>
          <div class="content-main__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, quo!
            Quidem esse sint quo labore ea minus, impedit neque corrupti.
          </div>
          <a href="#" class="content-main__button btn">Shop now</a>
        </div>
        <main class="main-slider__slider slider-main">
          <div class="slider-main__controls controls-slider-main">
            <div class="controls-slider-main__dots"></div>
            <div class="controls-slider-main__arrows slider-arrows">
              <button
                type="button"
                class="slider-arrow slider-arrow--prev _icon-arrow-down"
              ></button>
              <button
                type="button"
                class="slider-arrow slider-arrow--next _icon-arrow-down"
              ></button>
            </div>
          </div>
          <div class="slider-main__body">
            <Swiper
              :navigation="swiperNavigation"
              :pagination="swiperPagination"
              :spaceBetween="32"
              :slidesPerView="1"
              :loop="true"
              :speed="800"
              :loopAdditionalSlides="5"
              :preloadImages="false"
              :parallax="true"
            >
              <SwiperSlide>
                <div class="slider-main__slide">
                  <div class="slider-main__image _ibg">
                    <img src="@/assets/img/slider-image-1.jpg" alt="Image" />
                  </div>
                  <a
                    href="#"
                    class="slider-main__content"
                    data-swiper-parallax-opacity="0"
                    data-swiper-parallax-x="-100%"
                  >
                    <div class="slider-main__title">Bohauss</div>
                    <div class="slider-main__text">Luxury big sofa 2-seat</div>
                    <div class="slider-main__price _icon-arrow-link">
                      Rp 17.000.000
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="slider-main__slide">
                  <div class="slider-main__image _ibg">
                    <img src="@/assets/img/slider-image-2.jpg" alt="Image" />
                  </div>
                  <a
                    href="#"
                    class="slider-main__content"
                    data-swiper-parallax-opacity="0"
                    data-swiper-parallax-x="-100%"
                  >
                    <div class="slider-main__title">Bohauss</div>
                    <div class="slider-main__text">Luxury big sofa 2-seat</div>
                    <div class="slider-main__price _icon-arrow-link">
                      Rp 17.000.000
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="slider-main__slide">
                  <div class="slider-main__image _ibg">
                    <img src="@/assets/img/slider-image-3.jpg" alt="Image" />
                  </div>
                  <a
                    href="#"
                    class="slider-main__content"
                    data-swiper-parallax-opacity="0"
                    data-swiper-parallax-x="-100%"
                  >
                    <div class="slider-main__title">Bohauss</div>
                    <div class="slider-main__text">Luxury big sofa 2-seat</div>
                    <div class="slider-main__price _icon-arrow-link">
                      Rp 17.000.000
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </main>
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
  name: "MainSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperPagination: {
        clickable: true,
        el: ".controls-slider-main__dots",
      },
      swiperNavigation: {
        nextEl: ".slider-main .slider-arrow--next",
        prevEl: ".slider-main .slider-arrow--prev",
      },
    };
  },
};
</script>

<style lang="scss">
.main-slider {
  background-color: #fcf8f3;

  &__container {
    position: relative;

    @media (min-width: $md2+px) {
      &::before {
        content: "";
        background-color: #f9f1e7;
        position: absolute;
        top: 0;
        width: 100vw;
        right: 380px;
        height: 100%;
      }
    }
  }

  &__body {
    padding-top: 140px;
    position: relative;
    z-index: 2;

    @media (max-width: $md2 + px) {
      padding-top: 80px;
    }

    @media (max-width: $md3 + px) {
      padding-top: 50px;
    }

    @media (min-width: $md2 + px) {
      display: flex;
    }
  }

  &__content {
    align-self: flex-start;
    flex: 0 0 500 / 1240 * 100%;
    margin-bottom: 80px;
  }

  &__slider {
    flex: 1 1 auto;
    min-width: 0;
    align-self: flex-end;

    @media (min-width: $md2 + px) {
      padding-left: 32px;
    }
  }
}

.content-main {
  position: relative;
  z-index: 5;
  padding: 60px 15px;
  background: rgba(255, 255, 255, 0.7);

  @media (min-width: $md2+px) {
    padding: 60px;
  }

  &__title {
    font-size: 56px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 16px;
  }

  &__text {
    font-size: 20px;
    font-weight: 500;
    color: $grayColor;
    line-height: 1.5;
    margin-bottom: 40px;
  }

  &__button {
    min-height: 60px;
    font-size: 20px;
    font-weight: 600;
    background-color: $orangeColor;
    color: #fff;
    width: 100%;

    &:hover {
      background-color: #c77745;
    }
  }
}

.slider-main {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &__controls {
    align-self: stretch;
    margin-bottom: 20px;
  }

  &__image {
    padding-bottom: 60%;
  }

  &__body {
    .swiper-container {
      overflow: visible;

      @media (min-width: $md2 + px) {
        width: 934px;
      }
    }
  }

  &__slide {
    position: relative;
  }

  &__content {
    min-width: 295px;
    max-height: 300px;
    overflow: auto;
    color: inherit;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: rgba(255, 255, 255, 0.75);

    @media (min-width: $md3 + px) {
      position: absolute;
      min-width: 350px;
      bottom: 40px;
      right: 40px;
    }
  }

  &__title {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 4px;
  }

  &__text {
    line-height: 1.5;
    color: $grayColor;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  &__price {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    line-height: 1.5;
    font-size: 16px;

    &::before {
      margin-left: 10px;
    }
  }
}

.controls-slider-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.slider-arrows {
  display: grid;
  grid-template-columns: repeat(2, 48px);
  column-gap: 8px;

  .slider-arrow {
    border-radius: 50%;
    height: 48px;
    background-color: rgba(232, 159, 113, 0.3);
    color: $orangeColor;
    font-size: 12px;
    cursor: pointer;
    padding-top: 3px;
    transition: all 0.3s ease 0s;

    &--prev {
      transform: rotate(90deg);
    }

    &--next {
      transform: rotate(-90deg);
    }

    &:hover {
      color: #fff;
      background-color: rgba(232, 159, 113, 13);
    }

    &--white {
      box-shadow: 0 4px 14px 1px rgba(0, 0, 0, 0.15);
      background-color: #fff;

      &:hover {
        background-color: $orangeColor;
        color: #fff;
      }
    }
  }
}

.swiper-pagination-bullets {
  display: flex;
  user-select: none;
  flex-wrap: wrap;
  flex: 1 1 auto;
}

.swiper-pagination-bullet {
  cursor: pointer;
  flex: 0 0 27px;
  height: 27px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px 0;
  background-color: transparent;
  user-select: none;

  &:not(:last-child) {
    margin-right: 12px;
  }

  &::after {
    content: "";
    width: 11px;
    height: 11px;
    background-color: #747474;
    border-radius: 50%;
    transition: background-color 0.3s ease 0s;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid $orangeColor;
    transition: transform 0.3s ease 0s;
    transform: scale(0);
  }
}

.swiper-pagination-bullet-active {
  &::after {
    background-color: $orangeColor;
  }

  &::before {
    transform: scale(1);
  }
}
</style>
