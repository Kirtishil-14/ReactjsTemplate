import { configureStore, compose } from "@reduxjs/toolkit";
import homeReducer from "../slice/home";
// import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = configureStore({
  reducer: { home: homeReducer },
  composeEnhancers: composeEnhancers(),
});
export default Store;
