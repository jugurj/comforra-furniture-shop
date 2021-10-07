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
                <img src="@/assets/img/tips/01.jpg" alt="" />
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

<style lang="scss">
.tips {
  padding: 40px 0;

  &__title {
    margin-bottom: 20px;
  }
}

.slider-tips {
  .swiper-container {
    position: relative;
    margin-left: -15px;
    margin-right: -15px;
    padding: 15px;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.4s ease-in-out 0s;

    &:hover {
      box-shadow: 0 0 15px rgba(97, 97, 97, 0.2);
    }
  }

  &__image {
    padding-bottom: 250/390 * 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding: 15px;
    flex: 1 1 auto;
    align-items: flex-start;
  }

  &__title {
    flex: 1 1 auto;
    color: inherit;
    font-weight: 600;
    line-height: 1.2;
    font-size: 24px;
    transition: all 0.3s ease 0s;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    &:hover {
      color: $orangeColor;
    }

    &__text {
      color: $grayColor;
      font-size: 14px;
      line-height: 1.5;
    }
  }
}
</style>
