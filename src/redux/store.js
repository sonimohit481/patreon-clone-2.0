import {applyMiddleware,compose, combineReducers, legacy_createStore as createStore } from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./auth/authReducer"
import  userData from "./userData/userDataReducer"

const rootReducer=combineReducers({
    auth: authReducer,
    userData
})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

store.subscriber=()=>{
    console.log("State:", store.getState());
}

