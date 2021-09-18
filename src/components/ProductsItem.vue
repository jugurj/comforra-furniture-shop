<template>
  <article class="product-item">
    <div class="product-item__labels">
      <div class="product-item__label product-item__label--sale">-30%</div>
    </div>

    <a href="" class="product-item__image _ibg">
      <img src="@/assets/img/products/01.jpg" alt="Product image" />
    </a>

    <div class="product-item__body">
      <div class="item-product__contet">
        <h5 class="product-item__title">Syltherine</h5>
        <div class="product-item__text">Stylish cafe chair</div>
      </div>

      <div class="product-item__prices">
        <div class="product-item__price">Rp 2.500.000</div>
        <div class="product-item__price product-item__price--old">
          Rp 3.000.000
        </div>
      </div>

      <div class="product-item__actions actions-product">
        <div class="actions-product__body">
          <a href="" class="actions-product__button btn">Add to cart</a>
          <a href="" class="actions-product__link _icon-share">Share</a>
          <a href="" class="actions-product__link _icon-favorite">Like</a>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "ProductsItem",
};
</script>

<style lang="scss">
.product-item {
  background-color: #f4f5f7;
  display: flex;
  flex-direction: column;
  position: relative;

  &__labels {
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    right: 20px;
    top: 20px;
  }

  &__label {
    flex: 0 0 48px;
    width: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 500;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    &--sale {
      background-color: #e97171;
    }

    &--new {
      background-color: #2ec1ac;
    }
  }

  &__image {
    padding-bottom: 300px/285px * 100%;
  }

  &__body {
    flex: 1 1 auto;
    padding: 16px 16px 30px 16px;
    display: flex;
    flex-direction: column;
  }

  &__content {
    flex: 1 1 auto;
  }

  &__title {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 8px;
  }

  &__text {
    color: $grayColor;
    line-height: 1.5;
    margin-bottom: 8px;
  }

  &__prices {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    line-height: 1.5;
  }

  &__price {
    font-size: 20px;
    font-weight: 600;

    &--old {
      font-size: 16px;
      font-weight: normal;
      margin-left: 16px;
      color: #b0b0b0;
    }
  }
}
</style>
