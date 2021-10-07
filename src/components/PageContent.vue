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

    <section class="page__rooms">
      <Rooms />
    </section>

    <section class="page__tips">
      <Tips />
    </section>
  </main>
</template>

<script>
import MainSlider from "@/components/MainSlider";
import Advantages from "@/components/Advantages";
import Products from "@/components/Products";
import Rooms from "@/components/Rooms";
import Tips from "@/components/Tips";

export default {
  name: "PageContent",
  components: {
    MainSlider,
    Advantages,
    Products,
    Rooms,
    Tips,
  },
};
</script>

<style lang="scss"></style>
