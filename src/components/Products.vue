<template>
  <div class="products">
    <div class="products__container _container">
      <h2 class="products__title _title">Products</h2>

      <div class="products__items">
        <div
          class="products__item"
          v-for="product in displayedProducts"
          :key="product.id"
        >
          <ProductsItem :productData="product" />
        </div>
      </div>

      <div v-if="hasMoreProducts" class="products__footer">
        <p v-if="moreProductsLoading" class="products__more--loading">
          Loading...
        </p>

        <a
          href="javascript:;"
          @click="showMoreProducts"
          class="products__more btn"
        >
          Show more
        </a>
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
      productsPerView: 4,
      displayedProductsNumber: 4,
      moreProductsLoading: false,
    };
  },
  computed: {
    displayedProducts() {
      if (this.products.length > this.displayedProductsNumber) {
        return this.products.slice(0, this.displayedProductsNumber);
      }

      return this.products;
    },
    hasMoreProducts() {
      return this.displayedProductsNumber < this.products.length;
    },
  },
  methods: {
    showMoreProducts() {
      this.moreProductsLoading = true;

      setTimeout(() => {
        this.moreProductsLoading = false;
        this.displayedProductsNumber += this.productsPerView;
      }, 1000);
    },
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
    gap: 32px;
    grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
  }

  &__footer {
    padding-top: 32px;
    text-align: center;
  }

  &__more {
    border: 1px solid $orangeColor;
    color: $orangeColor;
    min-width: 245px;

    &--loading {
      margin-bottom: 10px;
    }

    &:hover {
      color: #fff;
      background-color: $orangeColor;
    }
  }
}
</style>
