<template>
  <div class="products">
    <div class="products__container _container">
      <h2 class="products__title _title">Products</h2>

      <div class="products__items">
        <div
          class="products__item"
          v-for="product in products"
          :key="product.id"
        >
          <ProductsItem :productData="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsItem from "@/components/ProductsItem.vue";
import productsStorage from "@/storage/products.json";

export default {
  name: "Products",
  components: {
    ProductsItem,
  },
  data() {
    return {
      products: productsStorage.products,
    };
  },
};
</script>

<style lang="scss">
.products {
  padding-bottom: 40px;

  &__title {
    margin-bottom: 30px;
  }

  &__items {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
