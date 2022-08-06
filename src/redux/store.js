import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import stepReducer, { formReducer } from './reducers/formReducers';

const rootReducer = combineReducers({ stepReducer, formReducer });
const Store = configureStore({ middleware: [thunk], reducer: rootReducer });

export default Store;
