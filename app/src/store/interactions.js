import { BrowserProvider, getAddress, formatUnits, Contract } from "ethers";
import MEDICAL_ABI from "../abis/MedicalRecord.json";
import { providerLoaded, networkLoaded, accountLoaded, etherBalanceLoaded } from './reducer';

// Load Provider
export const loadProvider = (dispatch) => {
  console.log('Loading provider...');
  const connection = new BrowserProvider(window.ethereum);
  console.log('Provider loaded:', connection);
  dispatch(providerLoaded({ connection }));
  return connection;
};

// Load Network
export const loadNetwork = async (provider, dispatch) => {
  console.log('Loading network...');
  const network = await provider.getNetwork();
  const chainId = network.chainId;
  console.log('Network loaded:', network);
  console.log('ChainId:', chainId, 'Type:', typeof chainId);
  const chainIdString = typeof chainId === 'bigint' ? chainId.toString() : chainId;
  console.log('ChainIdString:', chainIdString);
  dispatch(networkLoaded({ chainId: chainIdString }));
  return chainIdString;
};

// Load Account
export const loadAccount = async (provider, dispatch) => {
  console.log('Loading account...');
  console.log('Provider:', provider);
  if (!provider) {
    console.error('Provider is null. Initializing new provider.');
    provider = new BrowserProvider(window.ethereum);
  }
  console.log('Requesting accounts...');
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  console.log('Accounts:', accounts);
  const account = getAddress(accounts[0]);
  console.log('Selected account:', account);
  dispatch(accountLoaded({ account }));
  console.log('Fetching balance...');
  let balance = await provider.getBalance(account);
  console.log('Raw balance:', balance.toString());
  const balanceInEther = formatUnits(balance, 'ether');
  console.log('Formatted balance:', balanceInEther);
  const balanceAsString = balanceInEther.toString();
  console.log('Balance as string:', balanceAsString);
  dispatch(etherBalanceLoaded({ balance: balanceAsString }));
};

// Load Medical
export const loadMedical = (provider, address, dispatch) => {
  const medical = new Contract(address, MEDICAL_ABI, provider);
  return medical;
};

export const submitRecord = async (
  name,
  age,
  gender,
  bloodType,
  allergies,
  diagnosis,
  treatment,
  provider,
  medical,
  dispatch
) => {
  let transaction;
  dispatch({ type: "NEW_RECORD_LOADED" });
  try {
    const signer = await provider.getSigner();
    transaction = await medical
      .connect(signer)
      .addRecord(name, age, gender, bloodType, allergies, diagnosis, treatment);
    await transaction.wait();
    // You might want to dispatch a success action here
    dispatch({ type: "NEW_RECORD_SUCCESS" });
  } catch (error) {
    console.error("Error submitting record:", error);
    dispatch({ type: "NEW_RECORD_FAIL" });
  }
};