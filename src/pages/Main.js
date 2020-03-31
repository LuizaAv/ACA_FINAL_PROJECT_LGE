import React, { useReducer } from 'react';
import { Switch, Route } from 'react-router-dom';

import { StoreContext } from '../store/storeContext';
import { reducer } from '../store/reducers';

import Header from '../components/Header/Header';
import Summary from './Summary/Summary';
import Categories from './Categories/Categories';
import History from './History/History';
import Charts from './Charts/Charts'
// import useStyles from './Main.style';

import { budget, categories } from '../API/db';

const initialState = {
  categories: [...categories],
  budget: [...budget],
};

export default function Main() {
  // const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Summary />
        </Route>
        <Route path="/Categories">
          <Categories />
        </Route>
        <Route path="/History">
          <History />
        </Route>
        <Route path="/Charts">
          <Charts />
        </Route>
      </Switch>
    </StoreContext.Provider>
  );
}
