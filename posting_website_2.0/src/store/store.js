import { createStore, applyMiddleware } from "redux";
import states from '../reducers';
import thunk from 'redux-thunk';
 
export default () => {
    return createStore(states, applyMiddleware(thunk));
};
