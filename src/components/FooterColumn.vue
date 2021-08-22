<template>
  <div class="footer-column">
    <button type="button" class="footer-column__title">
      {{ columnTitle }}
    </button>

    <ul class="footer-column__list">
      <li v-for="(link, index) in columnLinks" :key="index">
        <a :href="link.url" class="footer-column__link">
          {{ link.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterColumn",
  props: {
    columnTitle: String,
    columnLinks: Array,
  },
};
</script>

<style lang="scss">
.footer-column {
  &__title {
    cursor: default;
    font-weight: 700;
    line-height: 29px;
    font-size: 24px;
    color: #000;
    background-color: transparent;
    margin-bottom: 1rem;
  }

  li {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  &__link {
    color: $darkGrayColor;
    line-height: 1.2;
    font-weight: 500;
    transition: color 0.3s ease 0s;

    &:hover {
      color: $orangeColor;
    }
  }
}
</style>
