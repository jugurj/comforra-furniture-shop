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
export default {
  name: "Rooms",
  methods: {
    getImgUrl(imageName) {
      return require("../assets/img/rooms/" + imageName);
    },
  },
};
</script>

<style lang="scss"></style>
