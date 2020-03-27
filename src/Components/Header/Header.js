import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import AddBudget from '../AddBudget/AddBudget';
import useStyles from './Header.style';

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <nav>
          <Link to="/" className={classes.link}>
            <Button className={classes.button}>
              Summary
            </Button>
          </Link>
          <Link to="/Categories" className={classes.link}>
            <Button className={classes.button}>
              Categories
            </Button>
          </Link>
          <Link to="/History" className={classes.link}>
            <Button className={classes.button}>
              History
            </Button>
          </Link>
        </nav>
        <AddBudget />
      </Toolbar>
    </AppBar>
  );
}
