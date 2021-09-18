<template>
  <article class="product-item">
    <div class="product-item__labels">
      <div class="product-item__label product-item__label--sale">-30%</div>
    </div>

    <a href="" class="product-item__image _img">
      <img src="" alt="" />
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

<style></style>
