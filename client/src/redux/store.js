import { configureStore } from '@reduxjs/toolkit';
import shopSliceReducer from "./shopSliceReducer"

// export default configureStore({
//     reducer: reducer
// })

//import todosReducer from './features/todos/todosSlice'
//import filtersReducer from './features/filters/filtersSlice'

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    shop: shopSliceReducer,
    //filters: filtersReducer
  }
})

export default store