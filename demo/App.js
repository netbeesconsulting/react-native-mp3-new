import React from 'react';
import Router from './src/navigation/StackNav';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <StoreProvider store={store}>
      <Router />
    </StoreProvider>
  );
}