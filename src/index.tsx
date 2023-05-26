import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {persistor, store} from "./store/store";
import {GlobalStyle} from "./styles/global.styles";
import {PersistGate} from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <GlobalStyle/>
        <App/>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
