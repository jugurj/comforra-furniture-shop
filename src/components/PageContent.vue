<template>
  <main class="page">
    <section class="page__main-slider">
      <MainSlider />
    </section>
  </main>
</template>

<script>
import MainSlider from "@/components/MainSlider";

export default {
  name: "PageContent",
  components: {
    MainSlider,
  },
};
</script>

<style lang="scss"></style>
