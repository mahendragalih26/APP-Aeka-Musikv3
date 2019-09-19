import { combineReducers } from "redux";

import Categorys from "./Categorys";
import Mains from "./Mains";
import Products from "./Products";
import Branches from "./Branches";
import Wishlist from "./Wishlist";
import Auth from "./Auth";

const rootReducer = combineReducers({
  Categorys,
  Mains,
  Products,
  Branches,
  Wishlist,
  Auth
});

export default rootReducer;
