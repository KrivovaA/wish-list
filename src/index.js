import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import firebase from "firebase";

// import Main from './components/main/Main';
import rootReducer from './reducers';
import DevTools from './components/DevTools';

import App from './components/App';
import config from './config/firebaseConfig';

// const store = createStore(rootReducer, DevTools.instrument());

firebase.initializeApp(config);

const render = Component => {
  ReactDOM.render(
    <Provider store={store()}>
      <BrowserRouter>
        <AppContainer>
          <Component />
        </AppContainer>
      </BrowserRouter>
    </Provider>,
    document.getElementById('app'),
  )
};

render(App);

// webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
    render(require('./components/App'));
  })
}

// ReactDOM.render(<Main />, document.getElementById('app'));