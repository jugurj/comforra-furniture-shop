<template>
  <article class="product-item" :data-pid="productData.id">
    <div class="product-item__labels">
      <div
        class="product-item__label"
        :class="'product-item__label--' + label.type"
        v-for="label in productData.labels"
        :key="label.type"
      >
        {{ label.value }}
      </div>
    </div>

    <a href="" class="product-item__image _ibg">
      <img :src="getImgUrl(productData.image)" alt="Product image" />
    </a>

    <div class="product-item__body">
      <div class="item-product__contet">
        <h5 class="product-item__title">
          {{ productData.title }}
        </h5>

        <div class="product-item__text">
          {{ productData.text }}
        </div>
      </div>

      <div class="product-item__prices">
        <div class="product-item__price">
          {{ "Rp " + productData.price }}
        </div>

        <div
          v-show="productData.priceOld"
          class="product-item__price product-item__price--old"
        >
          {{ "Rp " + productData.priceOld }}
        </div>
      </div>

      <div class="product-item__actions actions-product">
        <div class="actions-product__body">
          <a
            href="javascript:;"
            class="actions-product__button btn"
            @click="addCartClicked(productData.id, $event)"
            >Add to cart</a
          >
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
  props: {
    productData: Object,
  },
  methods: {
    getImgUrl(imageName) {
      return require("../assets/img/products/" + imageName);
    },
    addCartClicked(productId, event) {
      const buttonEl = event.target;

      if (!buttonEl.classList.contains("_hold")) {
        buttonEl.classList.add("_hold");
        buttonEl.classList.add("_fly");

        const cart = document.querySelector(".cart-header__icon");
        const product = document.querySelector(`[data-pid="${productId}"]`);
        const productImage = product.querySelector(".product-item__image");

        const productImageFly = productImage.cloneNode(true);

        const productImageFlyWidth = productImage.offsetWidth;
        const productImageFlyHeight = productImage.offsetHeight;
        const productImageFlyTop = productImage.getBoundingClientRect().top;
        const productImageFlyLeft = productImage.getBoundingClientRect().left;

        productImageFly.setAttribute("class", "_flyimage _ibg");
        productImageFly.style.cssText = `
        left: ${productImageFlyLeft}px;
        top: ${productImageFlyTop}px;
        width: ${productImageFlyWidth}px;
        height: ${productImageFlyHeight}px;
        `;

        document.body.append(productImageFly);

        const cartFlyLeft = cart.getBoundingClientRect().left;
        const cartFlyTop = cart.getBoundingClientRect().top;

        productImageFly.style.cssText = `
        left: ${cartFlyLeft}px;
        top: ${cartFlyTop}px;
        width: 0px;
        height: 0px;
        opacity: 0
        `;
      }
    },
  },
};
</script>

<style lang="scss">
.product-item {
  background-color: #f4f5f7;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (any-hover: hover) {
    &:hover {
      .product-item__actions {
        visibility: visible;
        opacity: 1;
        transition: visibility 0s linear 0s, opacity 0.5s;
      }
    }
  }

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
      text-decoration: line-through;
    }
  }

  &__actions {
    @media (any-hover: none) {
      padding-top: 15px;
    }

    @media (any-hover: hover) {
      opacity: 0;
      visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: visibility 0s linear 0.5s, opacity 0.5s;
      background-color: rgba(58, 58, 58, 0.75);
      z-index: 3;
    }
  }
}

.actions-product {
  &__body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__button {
    flex: 1 1 100%;
    color: $orangeColor;
    font-weight: 500;
    background-color: #fff;

    &:hover {
      background-color: $orangeColor;
      color: #fff;
    }

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    color: inherit;
    font-weight: 600;
    transition: color 0.3s ease 0;

    &::before {
      margin-right: 10px;
      font-size: 16px;
    }

    @media (any-hover: hover) {
      color: #fff;

      &:hover {
        color: $orangeColor;
      }
    }
  }
}
</style>
