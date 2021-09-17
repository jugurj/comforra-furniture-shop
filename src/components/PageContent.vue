<template>
  <main class="page">
    <section class="page__main-slider">
      <MainSlider />
    </section>

    <section class="page__advantages">
      <Advantages />
    </section>

    <section class="page__products">
      <Products />
    </section>
  </main>
</template>

<script>
import MainSlider from "@/components/MainSlider";
import Advantages from "@/components/Advantages";
import Products from "@/components/Products";

export default {
  name: "PageContent",
  components: {
    MainSlider,
    Advantages,
    Products,
  },
};
</script>

<style lang="scss"></style>
