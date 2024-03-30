import { configureStore } from "@reduxjs/toolkit"
import itemSlice from "./itemSlice"
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";


const myntraStore = configureStore({
  reducer: {
    fetchStatus: fetchStatusSlice.reducer,
    item: itemSlice.reducer,
    bag: bagSlice.reducer
  }

})

export default myntraStore;