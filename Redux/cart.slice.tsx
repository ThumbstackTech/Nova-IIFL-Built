import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  cartItems:
    // typeof window !== "undefined"
    //   ? Cookies.get("cartItems")
    //     ? JSON.parse(Cookies.get("cartItems"))
    //     : []
    [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state: any, action) {
      const existingIndex = state.cartItems.findIndex(
        (item: { data: any; id: any }) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);
      }

      if (typeof window !== "undefined") {
        Cookies.set("cartItems", JSON.stringify(state.cartItems));
      }
    },
    // decreaseCart(state, action) {
    //   const itemIndex = state.cartItems.findIndex(
    //     (item) => item.id === action.payload.id
    //   );

    //   if (state.cartItems[itemIndex].cartQuantity > 1) {
    //     state.cartItems[itemIndex].cartQuantity -= 1;

    //     toast.info("Decreased product quantity", {
    //       position: "bottom-left",
    //     });
    //   } else if (state.cartItems[itemIndex].cartQuantity === 1) {
    //     const nextCartItems = state.cartItems.filter(
    //       (item) => item.id !== action.payload.id
    //     );

    //     state.cartItems = nextCartItems;

    //     toast.error("Product removed from cart", {
    //       position: "bottom-left",
    //     });
    //   }

    //   Cookies.set("cartItems", JSON.stringify(state.cartItems));
    // },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem: { data: any; id: any }) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item: { id: any }) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;
        }
        if (typeof window !== "undefined") {
          Cookies.set("cartItems", JSON.stringify(state.cartItems));
        }
        return state;
      });
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (
          cartTotal: { total: number; quantity: any },
          cartItem: { price: any; cartQuantity: any }
        ) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state, action) {
      state.cartItems = [];
      if (typeof window !== "undefined") {
        Cookies.set("cartItems", JSON.stringify(state.cartItems));
      }
    },
  },

  //   reducers: {
  //     addToCart: (state, action) => {
  //       console.log(state.id);
  //       const itemExists = state.cartItems.find(
  //         (item) => item.id === action.payload.id
  //       );
  //       if (itemExists) {
  //         itemExists.quantity++;
  //       } else {
  //         state.cartItems.push({ ...action.payload, quantity: 1 });
  //       }
  //     },
  //     removeFromCart: (state, action) => {
  //       const index = state.cartItems.findIndex(
  //         (item) => item.id === action.payload
  //       );
  //       state.cartItems.splice(index, 1);
  //     },
  //   },
});

export const { addToCart, removeFromCart, getTotals, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
