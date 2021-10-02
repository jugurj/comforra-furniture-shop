<template>
  <ul class="cart-list" :class="{ _active: cartOpened }">
    <li
      v-for="cartItem in cart"
      :key="cartItem.id"
      :data-cart-pid="cartItem.id"
      class="cart-list__item"
    >
      <a href="" class="cart-list__image _ibg">
        <img :src="getProductImgUrl(cartItem.image)" alt="Product image" />
      </a>
      <div class="cart-list__body">
        <a href="" class="cart-list__title">{{ cartItem.title }}</a>
        <div class="cart-list__quantity">
          Quantity: <span>{{ cartItem.quantity }}</span>
        </div>
        <a
          href=""
          class="cart-list__delete"
          @click.prevent="$emit('cart-item-removed', cartItem)"
        >
          Delete
        </a>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CartList",
  props: {
    cartOpened: Boolean,
  },
  computed: mapState({
    cart: "cart",
  }),
  methods: {
    getProductImgUrl(imageName) {
      return require("../assets/img/products/" + imageName);
    },
  },
};
</script>

<style lang="scss">
.cart-list {
  overflow: auto;
  max-height: 200px;
  background: #f4f5f7;
  border: 1px solid #e0e0e0;
  position: absolute;
  top: 60px;
  right: 0;
  padding: 15px;
  width: 300px;
  z-index: 5;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease 0s;
  transform: translate(0, 20px);

  &._active {
    opacity: 1;
    visibility: visible;
    transform: translate(0, 0);
  }

  @media (max-width: $md2 + px) {
    top: 50px;
  }

  @media (max-width: $md3 + px) {
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
  }

  &__item {
    display: flex;
    align-items: flex-start;

    &:not(:last-child) {
      margin: 0 0 15px 0;
    }
  }

  &__image {
    flex: 0 0 100px;
    height: 100px;
  }

  &__body {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;
  }

  &__title {
    color: inherit;
    font-weight: 600;
    transition: color 0.3s ease 0s;
    margin-bottom: 16px;

    &:hover {
      color: $orangeColor;
    }
  }

  &__quantity {
    font-size: 14px;
    margin-bottom: 14px;
  }

  &__delete {
    color: red;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
