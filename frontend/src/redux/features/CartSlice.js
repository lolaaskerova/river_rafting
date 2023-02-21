import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  cartQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //add to cart
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex] = {
          ...state.cartItems[itemIndex],
          cartQuantity: state.cartItems[itemIndex].cartQuantity + 1,
          cartTotalAmount: (state.cartItems[itemIndex].cartTotalAmount +=
            state.cartItems[itemIndex].price),
        };
      } else {
        let addedProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(addedProduct);
      }
    },
    // remove from cart
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    //decrease cart item in cart
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    increaseCart(state, action) {
      const cartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[cartItemIndex].cartQuantity >= 1) {
        state.cartItems[cartItemIndex].cartQuantity += 1;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, decreaseCart, increaseCart } =
  cartSlice.actions;
