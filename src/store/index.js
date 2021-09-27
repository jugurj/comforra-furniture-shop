import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
  },
  getters: {
    getCart: (state) => {
      return [...state.cart];
    },
  },
  mutations: {
    addCartItem(state, updatedItem) {
      if (state.cart.some((product) => product.id === updatedItem.id)) {
        state.cart = state.cart.map((cartItem) => {
          if (cartItem.id == updatedItem.id) {
            updatedItem.quantity += 1;
            return updatedItem;
          }
          return cartItem;
        });
      } else {
        updatedItem.quantity = 1;
        state.cart.push(updatedItem);
      }
    },

    removeCartItem(state, item) {
      state.cart = state.cart.filter((cartItem) => {
        return cartItem.id != item.id;
      });
    },
  },
});
