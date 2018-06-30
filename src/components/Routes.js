import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import About from './about/About';
import WishListContainer from './wish/WishListContainer';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={WishListContainer} />
    <Route path="/about" component={About} />
  </Switch>
);

export default hot(module)(Routes);


