<template>
  <div class="footer-column">
    <button type="button" class="footer-menu__title">
      {{ columnTitle }}
    </button>

    <ul class="footer-menu__list">
      <li v-for="(link, index) in columnLinks" :key="index">
        <a :href="link.url" class="footer-menu__link">
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

<style></style>
