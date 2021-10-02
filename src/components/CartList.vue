<template>
  <ul class="cart-list">
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
        <a href="" class="cart-list__delete">Delete</a>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CartList",
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

<style></style>
