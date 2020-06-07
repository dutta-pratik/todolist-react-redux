import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import Appcss from "./App.css";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App style={Appcss.AppLayout} />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

