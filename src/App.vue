<template>
  <div class="wrapper">
    <TheHeader />
    <PageContent />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import PageContent from "./components/PageContent.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
    PageContent,
  },
};
</script>
