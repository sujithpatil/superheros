import React from 'react';
import { Provider } from 'react-redux';

import Data from './components/data';
import Table from './components/table';

import './App.css';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Data />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
