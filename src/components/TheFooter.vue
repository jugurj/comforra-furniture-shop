<template>
  <footer class="footer">
    <div class="footer__container _container">
      <div class="footer__body">
        <div class="footer__main">
          <FooterMain />
        </div>
        <div class="footer__menu">
          <FooterMenu />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterMain from "@/components/FooterMain.vue";
import FooterMenu from "@/components/FooterMenu.vue";

export default {
  name: "TheFooter",
  components: {
    FooterMain,
    FooterMenu,
  },
};
</script>

<style></style>
