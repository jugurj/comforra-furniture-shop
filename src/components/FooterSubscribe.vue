<template>
  <div class="footer-subscribe">
    <div class="footer-subscribe__title">Stay Updated</div>
    <form @submit.prevent="validateForm" class="footer-subscribe__form">
      <input
        type="text"
        name="email"
        class="footer-subscribe__input"
        placeholder="Enter your email..."
      />

      <button
        type="submit"
        class="footer-subscribe__button _icon-send"
      ></button>

      <div v-show="formHasErrors" class="footer-subscribe__form-error">
        Error
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FooterSubscribe",
  data() {
    return {
      formHasErrors: false,
    };
  },
  methods: {
    validateForm(e) {
      if (e.target.elements.email.value.length < 10) {
        this.formHasErrors = true;
      }
    },
  },
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

  &__form-error {
    position: absolute;
    top: 100%;
    margin-top: 3px;
    left: 12px;
    color: #ff0000;
    font-size: 12px;
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
