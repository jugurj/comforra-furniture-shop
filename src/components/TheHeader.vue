<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__container _container">
        <div class="header__body">
          <div class="header__main">
            <a href="#" class="header__logo">Comforra</a>
            <div class="header__menu menu">
              <nav class="menu__body">
                <ul class="menu__list">
                  <li class="menu__item">
                    <a href="javascript:;" class="menu__link">Products</a>
                    <button
                      type="button"
                      class="menu__arrow _icon-arrow-down"
                    ></button>
                    <ul class="menu__sub-list">
                      <li class="menu__sub-item">
                        <a href="" class="menu__sub-link">Product 1</a>
                      </li>
                      <li class="menu__sub-item">
                        <a href="" class="menu__sub-link">Product 2</a>
                      </li>
                      <li class="menu__sub-item">
                        <a href="" class="menu__sub-link">Product 3</a>
                      </li>
                      <li class="menu__sub-item">
                        <a href="" class="menu__sub-link">Product 4</a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu__item">
                    <a href="javascript:;" class="menu__link">Rooms</a>
                    <button
                      type="button"
                      class="menu__arrow _icon-arrow-down"
                    ></button>
                    <ul class="menu__sub-list">
                      <li class="menu__sub-item">
                        <a href="" class="menu__sub-link">Room 1</a>
                      </li>
                      <li class="menu__sub-item">
                        <a href="" class="menu__sub-link">Room 2</a>
                      </li>
                      <li class="menu__sub-item">
                        <a href="" class="menu__sub-link">Room 3</a>
                      </li>
                      <li class="menu__sub-item">
                        <a href="" class="menu__sub-link">Room 4</a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu__item">
                    <a href="" class="menu__link">Inspirations</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="header__search">
            <div
              :class="[
                'search-form',
                searchFormOpen ? 'search-form--active' : '',
              ]"
              v-click-outside="closeSearchForm"
            >
              <button
                type="button"
                @click="toggleSearchForm"
                class="search-form__icon _icon-search"
              ></button>
              <form action="" class="search-form__form">
                <button
                  type="submit"
                  class="search-form__submit _icon-search"
                ></button>
                <input
                  class="search-form__input"
                  type="text"
                  name="form[]"
                  autocomplete="off"
                  placeholder="Search item..."
                />
              </form>
            </div>
          </div>
          <div class="header__actions actions-header">
            <a
              href=""
              class="actions-header__item actions-header__item--favorites _icon-favorite"
            ></a>
            <div class="actions-header__item cart-header">
              <a
                href=""
                class="cart-header__icon _icon-cart"
                @click.prevent="toggleCart"
              >
                <span>{{ cart.length }}</span>
              </a>
              <div class="cart-header__list">
                <CartList
                  :cartOpened="cartOpened"
                  @cart-item-removed="removeCartItem"
                />
              </div>
            </div>
            <a
              href=""
              class="actions-header__item actions-header__item--user _ibg"
            >
              <img src="@/assets/img/avatar.jpg" alt="Avatar" />
            </a>
          </div>
          <button type="button" class="icon-menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import CartList from "@/components/CartList";
import { mapState } from "vuex";

export default {
  name: "TheHeader",
  components: {
    CartList,
  },
  data() {
    return {
      searchFormOpen: false,
      cartOpened: false,
    };
  },
  mounted() {
    this.bindScrollObserver();
  },
  computed: mapState({
    cart: "cart",
  }),
  methods: {
    toggleCart() {
      if (this.cart.length > 0) {
        this.cartOpened = !this.cartOpened;
      }
    },
    removeCartItem(cartItem) {
      this.$store.commit("removeCartItem", cartItem);

      if (this.cart.length === 0) {
        this.cartOpened = false;
      }
    },
    toggleSearchForm() {
      this.searchFormOpen = !this.searchFormOpen;
    },
    closeSearchForm() {
      this.searchFormOpen = false;
    },
    bindScrollObserver() {
      const headerEl = document.querySelector(".header");

      const callback = function(entries) {
        if (entries[0].isIntersecting) {
          headerEl.classList.remove("_scroll");
        } else {
          headerEl.classList.add("_scroll");
        }
      };

      const headerObserver = new IntersectionObserver(callback);
      headerObserver.observe(headerEl);
    },
  },
};
</script>

<style lang="scss">
// @import "@/assets/styles/styles.scss";

.header {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 40px;

  &._scroll {
    .header__wrapper {
      background-color: #fcf8f3;
    }

    .header__body {
      min-height: 50px;

      @media (min-width: $md2+px) {
        min-height: 70px;
      }
    }
  }

  &__wrapper {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 50;
    transition: background-color 0.3s ease 0s;
  }

  &__body {
    display: flex;
    align-items: center;
    padding: 5px 0;
    min-height: 125px;
    position: relative;
    transition: min-height 0.3s ease 0s;

    @media (max-width: $md2+px) {
      min-height: 80px;
    }

    @media (max-width: $md3+px) {
      min-height: 50px;
    }
  }

  &__main {
    display: flex;
    align-items: center;
    flex: 0 0 500 / 1240 * 100%;

    @media (max-width: $md2+px) {
      flex: 1 1 auto;
    }
  }

  &__logo {
    color: $black;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.5;
    position: relative;
    z-index: 5;
  }

  &__search {
    margin-right: 20px;

    @media (min-width: $md2 + px) {
      flex: 1 1 auto;
    }
  }
}

.menu {
  flex: 0 1 420px;

  &__body {
    @media (max-width: $md3 + px) {
      position: fixed;
      width: 100%;
      height: 100%;
      overflow: auto;
      top: 0;
      left: 0;
      background-color: #fcf8f3;
      transition: left 0.3s ease 0s;
      padding: 70px 15px 30px 15px;
    }
  }

  &__list {
    @media (min-width: $md3 + px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 3px;
    padding: 5px 0;
    position: relative;

    &:hover {
      .menu__sub-list {
        transform: translate(0, 0);
        opacity: 1;
        height: auto;
        visibility: visible;
        pointer-events: auto;
        padding: 15px;
      }

      .menu__arrow {
        transform: rotate(-180deg);
      }

      .menu__arrow,
      .menu__link {
        color: $orangeColor;
      }
    }
  }

  &__link {
    font-weight: 500;
    color: inherit;
    transition: color 0.3s ease 0s;

    @media (max-width: $md3 + px) {
      font-size: 24px;
      font-weight: 600;
    }
  }

  &__arrow {
    margin-left: 8px;
    transition: all 0.3s ease 0s;
    font-size: 8px;
    @media (max-width: $md3 + px) {
      font-size: 14px;
    }
  }

  &__sub-list {
    position: relative;
    background-color: $orangeColor;
    padding: 15px;
    flex: 1 1 100%;

    @media (min-width: $md3 + px) {
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease 0s;
      transform: translate(0px, 10px);
      min-width: 200px;
      left: 0;
      position: absolute;
      pointer-events: none;
      top: 100%;
      z-index: 6;
    }

    @media (max-width: $md3 + px) {
      opacity: 0;
      visibility: hidden;
      height: 0;
      padding: 0;
    }
  }

  &__sub-item {
    &:not(:last-child) {
      margin-bottom: 5px;

      @media (max-width: $md3 + px) {
        margin-bottom: 5px;
      }
    }
  }

  &__sub-link {
    color: #fff;
    line-height: 1.5;

    @media (any-hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }

    @media (max-width: $md3 + px) {
      font-size: 18px;
    }
  }
}

.search-form {
  max-width: 470px;

  &--active {
    .search-form__form {
      opacity: 1;
      top: 100%;
      visibility: visible;
    }

    .search-form__icon {
      color: $orangeColor;
    }
  }

  &__icon {
    position: relative;
    z-index: 5;
    font-size: 22px;
    color: #262f56;

    @media (min-width: $md2 + px) {
      display: none;
    }
  }

  &__form {
    background-color: #fff;
    display: flex;
    align-items: center;

    @media (max-width: $md2 + px) {
      box-shadow: 0 0 5px rgba(212, 209, 205, 0.3);
      position: absolute;
      width: 100%;
      left: 0;
      top: -100%;
      z-index: 5;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease 0s;
    }
  }

  &__submit {
    flex: 0 0 45px;
    height: 45px;
    color: #333;
    font-size: 18px;
    display: grid;
    place-items: center;
    transition: background-color 0.3s ease 0s;

    &:hover {
      background-color: $orangeColor;
    }
  }

  &__input {
    font-size: 14px;
    line-height: 1.5;
    color: $darkGrayColor;
    width: 100%;
    padding: 0 10px;
  }
}

.actions-header {
  position: relative;
  z-index: 5;
  display: grid;
  grid-template-columns: auto;
  grid-auto-flow: column;
  align-items: center;
  gap: 20px;

  &__item {
    &--favorites {
      color: #262f56;
      font-size: 24px;
      transition: color 0.3s ease 0s;

      &:hover {
        color: $orangeColor;
      }
    }

    &--user {
      overflow: hidden;
      border-radius: 50%;
      width: 34px;
      height: 34px;
    }
  }
}
.cart-header {
  &__icon {
    color: #262f56;
    font-size: 24px;
    transition: color 0.3s ease 0s;
    position: relative;
    display: block;

    &:hover {
      color: $orangeColor;
    }

    span {
      position: absolute;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      top: -10px;
      right: -10px;
      border-radius: 50%;
      background-color: $orangeColor;
      color: #fff;
      font-size: 12px;
    }
  }
}
</style>
