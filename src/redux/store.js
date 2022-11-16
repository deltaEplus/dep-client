import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import stepReducer, { formReducer, userReducer } from './reducers/formReducers';
import { imageReducer } from './reducers/imageReducer';

const rootReducer = combineReducers({
  stepReducer, formReducer, imageReducer, userReducer
});
const Store = configureStore({ middleware: [thunk], reducer: rootReducer });

export default Store;
