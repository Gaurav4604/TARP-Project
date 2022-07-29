import { combineReducers } from "redux";
import ComponentTreeReducer from "./ComponentTree/ComponentTreeReducer";
import themeReducer from "./Theme/themeReducer";
import utilsReducer from "./Utils/UtilsReducer";

const store = combineReducers({
  componentTree: ComponentTreeReducer,
  theme: themeReducer,
  utils: utilsReducer,
});

export default store;
