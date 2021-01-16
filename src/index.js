import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './store/configStore';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from "styled-components";
import Theme, {invertTheme} from './themes/Theme';

const {store, persistor} = configureStore();

ReactDOM.render(
<ThemeProvider theme={Theme}>
  <Provider store={store} >
    <PersistGate
    loading={null}
    persistor={persistor}
    >
      <App />
    </PersistGate>
  </Provider>
</ThemeProvider>,
  document.getElementById('root')
);
