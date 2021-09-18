<template>
  <div class="products">
    <div class="products__container _container">
      <h2 class="products__title _title">Products</h2>

      <div class="product__items">
        <div class="products__item">
          <ProductsItem />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsItem from "@/components/ProductsItem.vue";

export default {
  name: "Products",
  components: {
    ProductsItem,
  },
};
</script>

<style></style>
