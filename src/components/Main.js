import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Spending from './pages/Spending/Spending';
import Categories from './pages/Categories/Categories';
import History from './pages/History/History';

export default function Main() {
  return (
    <div>
      <Link to="/">Spending</Link><br/><button/>
      <Link to="/Categories">Categories</Link><br/>
      <Link to="/History">History</Link>

      <Switch>
        <Route exact path="/">
          <Spending />
        </Route>

        <Route path="/Categories">
          <Categories />
        </Route>

        <Route path="/History">
          <History />
        </Route>
      </Switch>
    </div>
  );
}