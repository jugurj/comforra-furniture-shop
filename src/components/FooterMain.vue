<template>
  <div class="footer-main">
    <a href="" class="footer-main__logo">Comforra</a>
    <div class="footer-main__text">
      There goes some lorem ipsum text.
    </div>
    <div class="footer-main__contacts">
      <FooterContacts />
    </div>
  </div>
</template>

<script>
import FooterContacts from "@/components/FooterContacts.vue";

export default {
  name: "FooterMain",
  components: {
    FooterContacts,
  },
};
</script>

<style lang="scss">
.footer-main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__logo {
    margin-bottom: 1rem;
  }

  &__text {
    color: $grayColor;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
}
</style>
