<template>
  <div class="footer-menu">
    <div class="footer-menu__column">
      <FooterColumn
        :columnTitle="menuColumn.title"
        :columnLinks="menuColumn.links"
      />
    </div>

    <div class="footer-menu__column">
      <FooterColumn
        :columnTitle="accountColumn.title"
        :columnLinks="accountColumn.links"
      />
    </div>

    <div class="footer-menu__column">
      <FooterColumn
        :columnTitle="socialColumn.title"
        :columnLinks="socialColumn.links"
      />
    </div>
  </div>
</template>

<script>
import FooterColumn from "@/components/FooterColumn.vue";

export default {
  name: "FooterMenu",
  components: {
    FooterColumn,
  },
  data() {
    return {
      menuColumn: {
        title: "Menu",
        links: [
          {
            title: "Products",
            url: "#",
          },
          {
            title: "Rooms",
            url: "#",
          },
          {
            title: "Inspirations",
            url: "#",
          },
          {
            title: "About us",
            url: "#",
          },
          {
            title: "Terms & Policy",
            url: "#",
          },
        ],
      },
      accountColumn: {
        title: "Account",
        links: [
          {
            title: "My Account",
            url: "#",
          },
          {
            title: "Checkout",
            url: "#",
          },
          {
            title: "My Cart",
            url: "#",
          },
          {
            title: "My Catalog",
            url: "#",
          },
        ],
      },
      socialColumn: {
        title: "Stay Connected",
        links: [
          {
            title: "Facebook",
            url: "#",
          },
          {
            title: "Instagram",
            url: "#",
          },
          {
            title: "Twitter",
            url: "#",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
.footer-menu {
  @media (min-width: $md3 + px) {
    display: flex;
  }

  &__column {
    @media (min-width: $md3 + px) {
      flex: 0 1 33.333%;
    }

    @media (max-width: $md3 + px) {
      margin-bottom: 20px;
    }
  }
}
</style>
