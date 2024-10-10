import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { store } from './store/store';
import React from 'react';

import Layout from './pages/Layout';
import Main from './pages/Main';


function App() {
  const persiststore = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persiststore}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/main" />} />
              <Route path="main" element={<Main />} />
              </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
