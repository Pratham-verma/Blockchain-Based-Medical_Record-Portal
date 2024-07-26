import { createSlice } from '@reduxjs/toolkit';

const providerSlice = createSlice({
  name: 'provider',
  initialState: {
    connection: null,
    chainId: null,
    account: null,
    balance: null,
  },
  reducers: {
    providerLoaded: (state, action) => {
      state.connection = action.payload.connection;
    },
    networkLoaded: (state, action) => {
      state.chainId = action.payload.chainId.toString();
    },
    accountLoaded: (state, action) => {
      state.account = action.payload.account;
    },
    etherBalanceLoaded: (state, action) => {
      state.balance = typeof action.payload.balance === 'string'
        ? action.payload.balance
        : action.payload.balance.toString();
    },
  },
});

const medicalSlice = createSlice({
  name: 'medical',
  initialState: {
    loaded: false,
    contract: null,
  },
  reducers: {
    medicalLoaded: (state, action) => {
      state.loaded = true;
      state.contract = action.payload.medical;
    },
  },
});

export const {
  providerLoaded,
  networkLoaded,
  accountLoaded,
  etherBalanceLoaded,
} = providerSlice.actions;

export const { medicalLoaded } = medicalSlice.actions;

export const providerReducer = providerSlice.reducer;
export const medicalReducer = medicalSlice.reducer;