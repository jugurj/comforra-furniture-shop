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

<style></style>
