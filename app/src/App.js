import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './store/store';
import { loadNetwork, loadProvider } from "./store/interactions";
import { Navbar } from "./components";

function AppContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadBlockchainData = async () => {
      try {
        const provider = loadProvider(dispatch);
        await loadNetwork(provider, dispatch);
        // Add any other blockchain data loading here
      } catch (error) {
        console.error("Error loading blockchain data:", error);
        // Handle the error appropriately, maybe update state to show an error message
      }
    };

    loadBlockchainData();
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
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