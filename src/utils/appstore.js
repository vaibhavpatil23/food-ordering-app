const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./CartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
