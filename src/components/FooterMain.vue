<template>
  <div class="footer__main">
    <a href="" class="footer__logo">Comforra</a>
    <div class="footer__text">
      There goes some lorem ipsum text.
    </div>
    <div class="footer__contact">
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

<style></style>
