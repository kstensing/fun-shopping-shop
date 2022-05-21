import { createStore } from 'redux'
//import shopSliceReducer from "./shopSliceReducer"

// const store = configureStore({
//   reducer: {
//     shop: shopSliceReducer,
//   }
// })

// export default store

// const createStore from "redux;" 
import reducers from "../utils/reducers";

const store = createStore(reducers);

export default store;