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

<style lang="scss">
.footer {
  &__body {
    border-top: 1px solid #d8d8d8;
    display: grid;
    grid-template-columns: 250px 1fr 290px;
    column-gap: 80px;
    padding-top: 80px;
    padding-bottom: 60px;

    @media (max-width: $md1 + px) {
      grid-template-rows: auto auto;
      grid-template-columns: 1fr 290px;
    }

    @media (max-width: $md2 + px) {
      display: block;
    }
  }

  &__main {
    @media (max-width: $md1 + px) {
      grid-column: span 2;
      margin-bottom: 40px;
    }
  }

  &__menu {
    @media (max-width: $md2 + px) {
      margin-bottom: 40px;
    }
  }
}
</style>
