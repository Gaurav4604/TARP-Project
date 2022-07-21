import { combineReducers } from "redux";
import ComponentTree from "./ComponentTree/ComponentTree";
import themeReducer from "./Theme/themeReducer";
import utilsReducer from "./Utils/UtilsReducer";

const store = combineReducers({
  componentTree: ComponentTree,
  theme: themeReducer,
  utils: utilsReducer,
});

export default store;
