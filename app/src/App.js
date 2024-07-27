import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './store/store';
import { loadMedical, loadNetwork, loadProvider } from "./store/interactions";
import { medicalLoaded } from './store/reducer'; 
import { Form, Navbar } from "./components";
import config from "./config.json";


function AppContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadBlockchainData = async () => {
      try {
        const provider = loadProvider(dispatch);
        const chainId = await loadNetwork(provider, dispatch);
       
        const chainConfig = config[chainId];
        if (chainConfig && chainConfig.MedicalRecord) {
          const medical_config = chainConfig.MedicalRecord;
          const medical = await loadMedical(provider, medical_config.address, dispatch);
          dispatch(medicalLoaded({ medical }));
        } else {
          console.error("No configuration found for chainId:", chainId);
        }
      } catch (error) {
        console.error("Error loading blockchain data:", error);
      }
    };
    loadBlockchainData();
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Welcome to the Decentralized Medical Records Portal</h1>
      <Navbar />
      <Form />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;