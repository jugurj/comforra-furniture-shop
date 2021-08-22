<template>
  <div class="footer-subscribe">
    <div class="footer-subscribe__title">Stay Updated</div>
    <form action="#" class="footer-subscribe__form">
      <input
        type="text"
        name="form[]"
        class="footer-subscribe__input"
        placeholder="Enter your email..."
      />

      <button
        type="submit"
        class="footer-subscribe__button _icon-send"
      ></button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FooterSubscribe",
};
</script>

<style lang="scss">
.footer-subscribe {
  &__title {
    font-weight: 700;
    line-height: 29px;
    font-size: 24px;
    color: #000;
  }
}
</style>
