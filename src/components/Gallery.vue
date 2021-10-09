<template>
  <div class="gallery">
    <div class="gallery__container">
      <div class="gallery__label">Share your setup with</div>
      <h2 class="gallery__title _title">#ComforraFurniture</h2>

      <div class="gallery__body">
        <div class="gallery__items">
          <div class="gallery__column">
            <div class="gallery__row row-gallery row-gallery--left-top">
              <a href="" class="row-gallery__item">
                <img
                  src="@/assets/img/furniture/09.jpg"
                  alt="Furniture image"
                />
              </a>

              <a href="" class="row-gallery__item">
                <img
                  src="@/assets/img/furniture/01.jpg"
                  alt="Furniture image"
                />
              </a>

              <a href="" class="row-gallery__item">
                <img
                  src="@/assets/img/furniture/02.jpg"
                  alt="Furniture image"
                />
              </a>
            </div>

            <div class="gallery__row row-gallery row-gallery--left-bottom">
              <a href="" class="row-gallery__item">
                <img
                  src="@/assets/img/furniture/04.jpg"
                  alt="Furniture image"
                />
              </a>

              <a href="" class="row-gallery__item">
                <img
                  src="@/assets/img/furniture/06.jpg"
                  alt="Furniture image"
                />
              </a>

              <a href="" class="row-gallery__item">
                <img
                  src="@/assets/img/furniture/07.jpg"
                  alt="Furniture image"
                />
              </a>
            </div>
          </div>
          <div class="gallery__column">
            <div class="gallery__row row-gallery row-gallery--center">
              <a href="" class="row-gallery__item">
                <img
                  src="@/assets/img/furniture/03.jpg"
                  alt="Furniture image"
                />
              </a>
            </div>
          </div>
          <div class="gallery__column">
            <div class="gallery__row row-gallery row-gallery--right-top">
              <a href="" class="row-gallery__item">
                <img
                  src="@/assets/img/furniture/04.jpg"
                  alt="Furniture image"
                />
              </a>

              <a href="" class="row-gallery__item">
                <img
                  src="@/assets/img/furniture/05.jpg"
                  alt="Furniture image"
                />
              </a>

              <a href="" class="row-gallery__item">
                <img
                  src="@/assets/img/furniture/01.jpg"
                  alt="Furniture image"
                />
              </a>
            </div>

            <div class="gallery__row row-gallery row-gallery--right-bottom">
              <a href="" class="row-gallery__item">
                <img
                  src="@/assets/img/furniture/08.jpg"
                  alt="Furniture image"
                />
              </a>

              <a href="" class="row-gallery__item">
                <img
                  src="@/assets/img/furniture/09.jpg"
                  alt="Furniture image"
                />
              </a>

              <a href="" class="row-gallery__item">
                <img
                  src="@/assets/img/furniture/06.jpg"
                  alt="Furniture image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
};
</script>

<style lang="scss">
.gallery {
  padding: 40px 0;

  &__label {
    text-align: center;
    color: $darkGrayColor;
    line-height: 1.5;
    font-size: 16px;
    margin-bottom: 0px;
  }

  &__title {
    margin-bottom: 40px;

    @media (any-hover: none) {
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  &__items {
    display: grid;
    grid-template-columns: auto;
    grid-auto-flow: column;
    align-items: center;
    gap: 16px;

    @media (any-hover: hover) {
      justify-content: center;
    }
  }

  &__column {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 -8px;

    &:first-child {
      justify-content: flex-end;
    }
  }

  &__row {
    display: inline-grid;
    padding: 0 8px;
    grid-auto-flow: column;
    align-items: center;
    gap: 16px;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
}
</style>
