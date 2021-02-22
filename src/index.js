import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reducer from "./reducer";
import { persistReducer, persistStore } from "redux-persist"
import { PersistGate } from 'redux-persist/integration/react';
import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist:['InReducer', 'AReducer'],
  blacklist:[]
}

const persistedReducer = persistReducer(persistConfig, reducer);
let store = createStore(persistedReducer)
const persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor }>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
