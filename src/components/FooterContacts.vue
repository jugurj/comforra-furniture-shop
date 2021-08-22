<template>
  <div class="footer-contacts">
    <a href="" class="footer-contacts__item">
      <span class="footer-contacts__item-icon _icon-location"></span>
      Street City, Country
    </a>
    <a href="" class="footer-contacts__item">
      <span class="footer-contacts__item-icon _icon-phone"></span>
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
    line-height: 1.5;
    color: $grayColor;
    transition: color 0.3s ease 0s;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    &:hover {
      color: $orangeColor;
    }
  }

  &__item-icon {
    &::before {
      margin-right: 8px;
    }
  }
}
</style>
