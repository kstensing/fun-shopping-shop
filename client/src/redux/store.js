import { configureStore } from '@reduxjs/toolkit';
import reducer from "./reducer"

export default configureStore({
    reducer: {
        UPDATE_PRODUCTS : UPDATE_PRODUCTS
        UPDATE_CATEGORIES : UPDATE_CATEGORIES
        UPDATE_CURRENT_CATEGORY : UPDATE_CURRENT_CATEGORY
        ADD_TO_CART : ADD_TO_CART
        ADD_MULTIPLE_TO_CART : ADD_MULTIPLE_TO_CART
        REMOVE_FROM_CART : REMOVE_FROM_CART
        UPDATE_CART_QUANTITY : UPDATE_CART_QUANTITY
        CLEAR_CART : CLEAR_CART
        TOGGLE_CART : TOGGLE_CART
    }
})