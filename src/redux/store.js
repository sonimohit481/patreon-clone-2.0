import {
  applyMiddleware,
  compose,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/authReducer";
import userData from "./userData/userDataReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  userData,
});

let middleware = applyMiddleware(thunk);

if (process.env.NODE_ENV === "development") {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  middleware = composeEnhancers(middleware);
}

export const store = createStore(rootReducer, middleware);

store.subscriber = () => {
  console.log("State:", store.getState());
};
