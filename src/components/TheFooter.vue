<template>
  <footer class="footer">
    <div class="footer__container _container">
      <div class="footer__body">
        <FooterMain />
      </div>
    </div>
  </footer>
</template>

<script>
import FooterMain from "@/components/FooterMain.vue";

export default {
  name: "TheFooter",
  components: {
    FooterMain,
  },
};
</script>

<style></style>
