import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import stepReducer, { formReducer } from './reducers/formReducers';
import { imageReducer } from './reducers/imageReducer';

const rootReducer = combineReducers({ stepReducer, formReducer, imageReducer });
const Store = configureStore({ middleware: [thunk], reducer: rootReducer });

export default Store;
