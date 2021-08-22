<template>
  <div class="footer-contacts">
    <a href="" class="footer-contacts__item _icon-location">
      Street City, Country
    </a>
    <a href="" class="footer-contacts__item _icon-phone">
      519312454
    </a>
    <a href="" class="footer-contacts__item">
      www.comforra.com
    </a>
  </div>
</template>

<script>
export default {
  name: "FooterContacts",
};
</script>

<style lang="scss">
.footer-contacts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__item {
    display: inline-flex;
    align-items: center;
  }
}
</style>
