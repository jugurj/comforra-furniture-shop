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

        <div class="footer__subscribe">
          <FooterSubscribe />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterMain from "@/components/FooterMain.vue";
import FooterMenu from "@/components/FooterMenu.vue";
import FooterSubscribe from "@/components/FooterSubscribe.vue";

export default {
  name: "TheFooter",
  components: {
    FooterMain,
    FooterMenu,
    FooterSubscribe,
  },
};
</script>

<style></style>
