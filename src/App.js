import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './public/redux/store';
import Router from './public/routes/Router';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
