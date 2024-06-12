import { createSlice } from '@reduxjs/toolkit';

const merchantSlice = createSlice({
    name: 'merchant',
    initialState: {
        username: '',
        mobileNo: '',
        accountNumber: '',
        bankName: '',
        password: '',
    },
    reducers: {
        setMerchantData: (state, action) => {
            state.username = action.payload.username;
            state.mobileNo = action.payload.mobileNo;
            state.accountNumber = action.payload.accountNumber;
            state.bankName = action.payload.bankName;
            state.password = action.payload.password;
        },
    },
});

export const { setMerchantData } = merchantSlice.actions;

// Selector
export const selectMerchant = (state) => state.merchant;

export default merchantSlice.reducer;
