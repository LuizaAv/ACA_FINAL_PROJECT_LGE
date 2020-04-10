import React from 'react';
import propTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '22ch',
      color: '#ff5d5d',
    },
  },
}));

export default function HistorySearch({ search, setSearch }) {
  const classes = useStyles();
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-secondary"
        label="Search Your Card..."
        variant="outlined"
        color="secondary"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

HistorySearch.propTypes = {
  setSearch: propTypes.func.isRequired,
  search: propTypes.bool.isRequired,
};
