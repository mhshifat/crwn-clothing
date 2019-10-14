import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import collectionReducer from "./collectionReducer";
import directoryReducer from "./directoryReducer";
import userReducer from "./userReducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  collection: collectionReducer
});
