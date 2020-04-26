import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormattedMessage } from 'react-intl';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import useStyles from './AddBudget.style';
import Snackbars from '../Snackbars/Snackbars';
import { addBudget } from '../../store/actions';
import { useStoreContext } from '../../store/storeContext';
import { dbAddBudget } from '../../API/dbActions';

function currencyIcon(currency) {
  if (currency === 'USD') {
    return '$';
  }
  if (currency === 'AMD') {
    return '\u058F';
  }
  if (currency === 'RUB') {
    return '\u20bd';
  }
  if (currency === 'EUR') {
    return '\u20ac';
  }
  return '';
}

export default function AddBudget() {
  const classes = useStyles();
  const { state, dispatch } = useStoreContext();
  const { rate, currency } = useStoreContext();
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [datePickerError, setDatePickerError] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarType, setSnackbarType] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSnackbarAdd = () => {
    setSnackbarType('add');
    setSnackbarOpen(true);
  };

  const handleSnackbarErroe = () => {
    setSnackbarType('error');
    setSnackbarOpen(true);
  };

  const handleCancel = () => {
    setDialogOpen(false);
    setSnackbarType('cancel');
    setSnackbarOpen(true);
  };

  const handleClickExpense = () => {
    if (type === 'income') {
      setCategory('');
    }
    setType('expense');
    setDialogOpen(true);
  };

  const handleClickIncome = () => {
    if (type === 'expense') {
      setCategory('');
    }
    setType('income');
    setDialogOpen(true);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = state.categories.find(
      (item) => item.name === e.target.value,
    );
    setColor(selectedCategory.color);
    setCategory(e.target.value);
  };

  const handleAmountChange = (e) => {
    const { value } = e.target;
    const firstChar = /^[1-9]/.test(value);
    const allChar = firstChar ? /^[0-9]+$/.test(value) : false;
    const text = allChar ? value : value.slice(0, -1);
    setAmount(text);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleDatePickerError = (e) => {
    setDatePickerError(e);
  };

  const handleStateReset = () => {
    setDialogOpen(false);
    setType('');
    setName('');
    setCategory('');
    setColor('');
    setAmount('');
    setDate(new Date());
  };

  const handleAddingBudget = () => {
    const id = uuidv4();
    const addedBudget = {
      id, type, name, amount: +amount, date, category, color,
    };
    handleStateReset();
    dbAddBudget({
      ...addedBudget, amount: Math.ceil(addedBudget.amount / rate[currency]),
    })
      .then(() => dispatch(addBudget(addedBudget)))
      .then(() => handleSnackbarAdd())
      .catch(() => handleSnackbarErroe());
  };

  const doneDisabled = (
    category === ''
    || name === ''
    || amount === ''
    || date === null
    || datePickerError !== ''
  );

  return (
    <div>
      <div className={classes.addButtons}>
        <Button
          className={classes.addIncome}
          onClick={handleClickIncome}
          color="primary"
          variant="outlined"
        >
          <FormattedMessage id="addIncome" />
        </Button>
        <Button
          className={classes.addExpense}
          onClick={handleClickExpense}
          color="secondary"
          variant="outlined"
        >
          <FormattedMessage id="addExpense" />
        </Button>
      </div>

      <Dialog
        fullWidth
        maxWidth="xs"
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogTitle
          className={
            type === 'expense'
              ? classes.titleExpence
              : classes.titleIncome
          }
        >
          {type === 'expense'
            ? <FormattedMessage id="addExpense" />
            : <FormattedMessage id="addIncome" />}
        </DialogTitle>

        <FormControl className={classes.item}>
          <InputLabel>
            <FormattedMessage id="category" />
          </InputLabel>
          <Select value={category} onChange={handleCategoryChange}>
            {state.categories
              .filter((item) => item.type === type)
              .map((item) => (
                <MenuItem value={item.name} key={item.id}>
                  {item.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <TextField
          className={classes.item}
          label={<FormattedMessage id="name" />}
          value={name}
          onChange={handleNameChange}
        />

        <TextField
          className={classes.item}
          label={<FormattedMessage id="amount" />}
          value={amount}
          onChange={handleAmountChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">{currencyIcon(currency)}</InputAdornment>,
          }}
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            className={classes.date}
            format="dd/MM/yyyy"
            margin="normal"
            label={<FormattedMessage id="date" />}
            onError={handleDatePickerError}
            value={date}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>

        <DialogActions className={classes.dialogAction}>
          <Button
            className={classes.actionButton}
            onClick={handleCancel}
            color="secondary"
          >
            <FormattedMessage id="cancel" />
          </Button>
          <Button
            className={classes.actionButton}
            disabled={doneDisabled}
            onClick={handleAddingBudget}
            color="primary"
          >
            <FormattedMessage id="done" />
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbars type={snackbarType} open={snackbarOpen} setOpen={setSnackbarOpen} />
    </div>
  );
}
