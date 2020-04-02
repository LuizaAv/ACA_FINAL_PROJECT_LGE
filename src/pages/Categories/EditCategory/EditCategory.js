import React, { useState } from 'react';
import propTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit';

import { useStoreContext } from '../../../store/storeContext';
import { editCategory } from '../../../store/actions';
import useStyles from './EditCategory.style';

export default function EditCategory({ category }) {
  const classes = useStyles();
  const { dispatch } = useStoreContext();
  const [type, setType] = useState(category.type);
  const [name, setName] = useState(category.name);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEditCategory = () => {
    const { id } = category;
    const editedCategory = { id, type, name };
    handleOpen();
    dispatch(editCategory(editedCategory));
  };

  const doneDisabled = !(name !== '' && type !== '');

  return (
    <>
      <IconButton
        className={classes.iconButton}
        onClick={handleOpen}
      >
        <EditIcon
          className={classes.icon}
        />
      </IconButton>

      <Dialog fullWidth maxWidth="xs" onClose={handleOpen} open={open}>
        <DialogTitle className={classes.title}>Edit Category</DialogTitle>

        <FormControl className={classes.itemSize}>
          <InputLabel>Category type</InputLabel>
          <Select value={type} onChange={handleTypeChange}>
            <MenuItem value="expense">Expense</MenuItem>
            <MenuItem value="income">Income</MenuItem>
          </Select>
        </FormControl>

        <TextField
          className={classes.itemSize}
          label="Category name"
          value={name}
          onChange={handleNameChange}
        />

        <DialogActions>
          <Button
            disabled={doneDisabled}
            variant="outlined"
            onClick={handleEditCategory}
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

EditCategory.propTypes = {
  category: propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  }),
};

EditCategory.defaultProps = {
  category: {
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  },
};
