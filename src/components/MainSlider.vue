<template>
  <div class="main-slider">
    <div class="main-slider__container _container">
      <div class="main-slider__body">
        <div class="main-slider__content content-main">
          <h1 class="content-main__title"></h1>
          <div class="content-main__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, quo!
            Quidem esse sint quo labore ea minus, impedit neque corrupti.
          </div>
          <a href="#" class="content-main__button">Shop now</a>
        </div>
        <main class="slider__slider slider-main">
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
            <div class="slider-main__slide">
              <div class="slider-main__image _ibg">
                <img src="@/assets/img/slider-image-1.jpg" alt="Image" />
              </div>
              <a href="#" class="slider-main__content">
                <div class="slider-main__title">Bohauss</div>
                <div class="slider-main__text">Luxury big sofa 2-seat</div>
                <div class="slider-main__price _icon-arrow-link">
                  Rp 17.000.000
                </div>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainSlider",
};
</script>

<style></style>
