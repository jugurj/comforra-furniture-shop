<template>
  <main class="page">
    <section class="page__main-slider">
      <MainSlider />
    </section>
    <section class="page__advantages">
      <Advantages />
    </section>
  </main>
</template>

<script>
import MainSlider from "@/components/MainSlider";
import Advantages from "@/components/Advantages";

export default {
  name: "PageContent",
  components: {
    MainSlider,
    Advantages,
  },
};
</script>

<style lang="scss"></style>
