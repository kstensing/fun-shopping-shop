import { createSlice, createAction } from '@reduxjs/toolkit'



export const slice = createSlice({
    name: "shop-slice",
      initialState: {
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: ''
    },
    reducers: {
        UPDATE_PRODUCTS: (state) => {
            return {
                ...state,
                products: [...action.products]}
        },
        UPDATE_CATEGORIES: (state) => {
        return {
            ...state,
            categories: [...action.categories],
          };
        },

        UPDATE_CURRENT_CATEGORY: (state) => {
            return {
                ...state,
                currentCategory: action.currentCategory
              }
        },
        ADD_TO_CART: (state) => {
            return {
                ...state,
                cartOpen: true,
                  cart: [...state.cart, action.product]
              };
        },
        ADD_MULTIPLE_TO_CART: (state) => {
            return {
                ...state,
                cart: [...state.cart, ...action.products],
              };
        },
        REMOVE_FROM_CART: (state) => {
            let newState = state.cart.filter(product => {
                return product._id !== action._id;
              });
      
              return {
                ...state,
                cartOpen: newState.length > 0,
                  cart: newState
              };
        },
        UPDATE_CART_QUANTITY: (state) => {
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
        CLEAR_CART: (state) => {
            return {
                ...state,
                cartOpen: false,
                  cart: []
              };
        },
        TOGGLE_CART: (state) => {
            return {
                ...state,
                cartOpen: !state.cartOpen
              };
        },
    }
    });

export const { UPDATE_PRODUCTS, UPDATE_CART_QUANTITY, UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY, ADD_TO_CART, ADD_MULTIPLE_TO_CART, REMOVE_FROM_CART, CLEAR_CART, TOGGLE_CART } = slice.actions;
export default slice.reducer;