import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useMainContext } from './mainContext';
import { useStoreContext } from '../../store/storeContext';
import { useSnackbarContext } from '../../components/Snackbars/snackbarContext';
import { initCategory, initBudget, editBudget } from '../../store/actions';
import { dbGetBudget, dbGetCategory, rateExchange } from '../../API/dbActions';
import { ERROR } from '../../components/Snackbars/snackbarActions';

import Navigation from '../../components/Navigation/Navigation';
import { ROUTES } from '../../globals/routes';
import Summary from '../Summary/Summary';
import Categories from '../Categories/Categories';
import History from '../History/History';
import Charts from '../Charts/Charts';
import Help from '../Help/Help';
import Snackbars from '../../components/Snackbars/Snackbars';
import useStyles from './Main.style';

export default function Main() {
  const classes = useStyles();
  const { snackbarDispatch } = useSnackbarContext();
  const { dispatch } = useStoreContext();
  const {
    currency, rate, setRate, loading, setLoading,
  } = useMainContext();

  const getDatabase = async () => {
    try {
      const categories = await dbGetCategory();
      const budget = await dbGetBudget();
      dispatch(initCategory(categories));
      dispatch(initBudget(budget));
      setLoading(false);
    } catch (err) {
      snackbarDispatch(ERROR);
      setLoading(false);
    }
  };

  const getRate = async () => {
    const rateResponse = await rateExchange();
    setRate(rateResponse);
  };

  const currencyChange = async () => {
    try {
      const budget = await dbGetBudget();
      budget.map((item) => (
        dispatch(editBudget(
          { ...item, amount: Math.floor(item.amount * rate[currency]) },
        ))
      ));
      setLoading(false);
    } catch (err) {
      setLoading(false);
      snackbarDispatch(ERROR);
    }
  };

  useEffect(() => {
    getRate();
    getDatabase();
  }, []);

  useEffect(() => {
    setLoading(true);
    currencyChange();
  }, [currency, rate]);

  return (
    <div className={classes.root}>
      <div className={classes.navigation}>
        <Navigation />
      </div>

      {loading
        ? (
          <div className={classes.progress}>
            <CircularProgress size={50} />
          </div>
        )
        : (
          <div className={classes.content}>
            <Switch>
              <Route exact path={ROUTES.summary}>
                <Summary />
              </Route>
              <Route path={ROUTES.categories}>
                <Categories />
              </Route>
              <Route path={ROUTES.history}>
                <History />
              </Route>
              <Route path={ROUTES.charts}>
                <Charts />
              </Route>
              <Route path={ROUTES.help}>
                <Help />
              </Route>
            </Switch>
          </div>
        )}
      <Snackbars />
    </div>
  );
}
