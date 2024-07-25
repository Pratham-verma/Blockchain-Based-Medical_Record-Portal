import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  connection: null,
  chainId: null,
  account: null,
  balance: null,
};

const providerSlice = createSlice({
  name: 'provider',
  initialState,
  reducers: {
    providerLoaded: (state, action) => {
      state.connection = action.payload.connection;
    },
    networkLoaded: (state, action) => {
      state.chainId = action.payload.chainId.toString();;
    },
    accountLoaded: (state, action) => {
      state.account = action.payload.account;
    },
    etherBalanceLoaded: (state, action) => {
      state.balance = typeof action.payload.balance === 'string' 
        ? action.payload.balance 
        : action.payload.balance.toString();
    }
  },
});

export const { providerLoaded, networkLoaded, accountLoaded, etherBalanceLoaded } = providerSlice.actions;
export const provider = providerSlice.reducer;
