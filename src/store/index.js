import {legacy_createStore, combineReducers} from 'redux';
import resultReducer from './modules/result/reducer';

const reducers = combineReducers({result: resultReducer});

const store = legacy_createStore(reducers);

export default store;
