import { createSlice } from '@reduxjs/toolkit';

const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        businessName: '',
        mobileNo: '',
        password: '',
    },
    reducers: {
        setCustomerData: (state, action) => {
            state.businessName = action.payload.businessName;
            state.mobileNo = action.payload.mobileNo;
            state.password = action.payload.password;
        },
    },
});

export const { setCustomerData } = customerSlice.actions;

// Selector
export const selectCustomer = (state) => state.customer;

export default customerSlice.reducer;
