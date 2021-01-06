import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import configureStore from './store/configStore';
import {PersistGate} from 'redux-persist/integration/react';
import { ThemeProvider } from "styled-components";

const {store, persistor} = configureStore();

const theme = {
  primaryColor: "#ff4900",
  secondaryColor: "#ff0000",
  primaryFont: "Montserrat, Roboto, sans-serif",
  secondaryFont: "Open Sans, Roboto, sans-serif",
  h1FontSize: "48px",
  h2FontSize: "36px",
  h3FontSize: "24px",
  h4FontSize: "18px",
  maxTextWidth: "800px",
  buttonStyles: 
    `display: inline-block;
    line-height: 35px;
    margin: 8px;
    padding: 15px 25px;
    font-size: 18px;
    position: relative;
    opacity: .999;
    border-radius: 3px;
    transition: 0.5s;
    
    background-color: transparent;
    border: 2px solid #d0d0d0;
    color: #B8B8B8;

    &:before, &:after {
      content: '';
      border-style: solid;
      border-color: #ff4900;
      position: absolute;
      z-index: 5;
      border-radius: 3px;
      box-sizing: content-box;
      transition: 0.5s;
    }

    &:before {
      width: 0;
      height: 100%;
      border-width: 2px 0 2px 0;
      top: -1px;
      left: 0;
      transition-delay: 0.05s;
    }

    &:after {
      width: 100%;
      height: 0;
      border-width: 0 2px 0 2px;
      top: 0;
      left: -1px;
    }

    &:hover {
      color: #ff4900;
    }

    &:active {
      border-color: transparent;
    }

    &:hover:before {
      width: 100%;
    }

    &:hover:after {
      height: 100%;
    }
    `,
  
}

ReactDOM.render(
<ThemeProvider theme={theme}>
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
