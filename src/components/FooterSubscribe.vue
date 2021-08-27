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
    margin-bottom: 16px;
  }

  &__form {
    display: flex;
    position: relative;
  }

  // Added specifity to the rule so that icon
  // reset would not override background color
  &__button[type="submit"] {
    flex: 0 0 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    background-color: $orangeColor;
    color: #fff;
    margin-left: 4px;
    transition: background-color 0.3s ease 0s;

    &:hover {
      background-color: #be825c;
    }
  }

  &__input {
    width: 100%;
    padding: 0 12px;
    background-color: #f4f5f7;
    color: #828282;
  }
}
</style>
