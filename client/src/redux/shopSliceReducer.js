import {
  createSlice
} from '@reduxjs/toolkit'

// const initialState = {
//   products: [],
//   cart: [],
//   cartOpen: false,
//   categories: [],
//   currentCategory: ''
// }

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: ''
  },
  reducers: {
    UPDATE_PRODUCTS: (state, action) => {
      return {
        ...state,
        products: [...action.products]
      }
    },
    UPDATE_CATEGORIES: (state, action) => {
      console.log('update categories')
      state.categories += action.payload
    },

    UPDATE_CURRENT_CATEGORY: (state, action) => {
      return {
        ...state,
        currentCategory: action.currentCategory
      }
    },
    ADD_TO_CART: (state, action) => {
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product]
      };
    },
    ADD_MULTIPLE_TO_CART: (state, action) => {
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };
    },
    REMOVE_FROM_CART: (state, action) => {
      let newState = state.cart.filter(product => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };
    },
    UPDATE_CART_QUANTITY: (state, action) => {
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(product => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        })
      };
    },
    CLEAR_CART: (state, action) => {
      return {
        ...state,
        cartOpen: false,
        cart: []
      };
    },
    TOGGLE_CART: (state, action) => {
      return {
        ...state,
        cartOpen: !state.cartOpen
      };
    },
  }
});

export const {
  UPDATE_PRODUCTS,
  UPDATE_CART_QUANTITY,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  ADD_TO_CART,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  TOGGLE_CART
} = shopSlice.actions;

export default shopSlice.reducer;