import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import store from '@/store';
import 'antd/dist/antd.css';
import './App.scss';

import Guard from "@/router/guard";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Guard />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
