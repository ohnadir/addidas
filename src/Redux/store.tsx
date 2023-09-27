"use client";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from "./reducers/users";
import { orderReducer } from './reducers/order'

const reducer = combineReducers({
    auth : authReducer,
    order : orderReducer
})
const middleware = [thunk];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware))) 
export type RootState = ReturnType<typeof reducer> 
// export type AppDispatch = typeof reducer.dispatch
export default store;