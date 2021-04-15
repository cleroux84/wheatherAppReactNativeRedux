/* import {combineReducers, createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import forecastReducer from "./reducers/forecastReducer";
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const middleware = [
    thunk
];
let store = createStore(combineReducers({forecastReducer}),
    composeEnhancers(
        applyMiddleware(...middleware),
    )
);
export default store; */

import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import forecastReducer from "./reducers/forecastReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export default createStore(forecastReducer, composeEnhancers(applyMiddleware(thunk)));