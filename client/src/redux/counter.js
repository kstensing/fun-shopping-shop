import {
    useReducer
  } from "react";
  import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART,
    TOGGLE_CART
  } from './actions';
  
  import { createSlice } from "@reduxjs/toolkit"
  
  export const counterSlice = createSlice ({ 
      name: "shop",
      initialState: {
        products: [],
        categories: [{ name: 'Food' }],
        currentCategory: '1',
        cart: [
           {
         _id: '1',
         name: 'Soup',
         purchaseQuantity: 1
        },
        {
          _id: '2',
         name: 'Bread',
         purchaseQuantity: 2
         }
         ],
        cartOpen: false
      },
      reducers: {
        UPDATE_PRODUCTS:
        return {
          (state) => {products: [...action.products]}
          ,
        };
  
      case UPDATE_CATEGORIES:
        return {
          ...state,
          categories: [...action.categories],
        };
  
      case UPDATE_CURRENT_CATEGORY:
        return {
          ...state,
          currentCategory: action.currentCategory
        }
  
        case ADD_TO_CART:
          return {
            ...state,
            cartOpen: true,
              cart: [...state.cart, action.product]
          };
  
        case ADD_MULTIPLE_TO_CART:
          return {
            ...state,
            cart: [...state.cart, ...action.products],
          };
  
        case REMOVE_FROM_CART:
          let newState = state.cart.filter(product => {
            return product._id !== action._id;
          });
  
          return {
            ...state,
            cartOpen: newState.length > 0,
              cart: newState
          };
  
        case UPDATE_CART_QUANTITY:
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
  
        case CLEAR_CART:
          return {
            ...state,
            cartOpen: false,
              cart: []
          };
  
        case TOGGLE_CART:
          return {
            ...state,
            cartOpen: !state.cartOpen
          };
        default:
          return state;
    }
  };
  
  export function useProductReducer(initialState) {
    return useReducer(reducer, initialState)
  }