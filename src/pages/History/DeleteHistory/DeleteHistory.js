import React from 'react';
import propTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { useStoreContext } from '../../../store/storeContext';
import { deleteBudget } from '../../../store/actions';
import { dbDeleteBudget } from '../../../API/dbActions';
import useStyles from './DeleteHistory.style';


export default function DeleteHistory({ budget, setOpenDelete, setOpenCancel }) {
  const classes = useStyles();
  const { dispatch } = useStoreContext();
  const [open, setOpen] = React.useState(false);


  const handleClose = () => {
    setOpen(!open);
  };

  const handleCancel = () => {
    setOpen(false);
    setOpenCancel(true);
  };

  const handleDeleteBudget = () => {
    setOpenDelete(true);
    dbDeleteBudget(budget);
    dispatch(deleteBudget(budget));
  };

  return (
    <>
      <IconButton
        className={classes.iconButton}
        onClick={handleClose}
      >
        <DeleteIcon className={classes.icon} />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.dialog }}
      >
        <DialogTitle className={classes.dialogTitle} disableTypography>
          Are you sure want to permanently remove this item?
        </DialogTitle>
        <DialogActions className={classes.dialogAction}>
          <Button
            onClick={handleCancel}
            className={classes.actionButton}
            color="secondary"
          >
            Cancel
          </Button>
          <Button
            onClick={handleDeleteBudget}
            className={classes.actionButton}
            color="primary"
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

DeleteHistory.propTypes = {
  budget: propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
    amount: propTypes.number.isRequired,
    date: propTypes.instanceOf(Date),
  }),
  setOpenDelete: propTypes.func.isRequired,
  setOpenCancel: propTypes.func.isRequired,
};

DeleteHistory.defaultProps = {
  budget: {
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
    amount: propTypes.number.isRequired,
    date: propTypes.instanceOf(Date),
  },
};
