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

    <section class="page__gallery">
      <Gallery />
    </section>
  </main>
</template>

<script>
import MainSlider from "@/components/MainSlider";
import Advantages from "@/components/Advantages";
import Products from "@/components/Products";
import Rooms from "@/components/Rooms";
import Tips from "@/components/Tips";
import Gallery from "@/components/Gallery";

export default {
  name: "PageContent",
  components: {
    MainSlider,
    Advantages,
    Products,
    Rooms,
    Tips,
    Gallery,
  },
};
</script>

<style lang="scss"></style>
