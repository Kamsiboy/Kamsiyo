import { combineReducers } from '@reduxjs/toolkit';
import customerSlice from './customerSlice';
import merchantSlice from './merchantSlice';

const rootReducer = combineReducers({
    customer: customerSlice,
    merchant: merchantSlice,
});

export default rootReducer;
