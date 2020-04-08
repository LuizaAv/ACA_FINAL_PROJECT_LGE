import React from 'react';
import propTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { useStoreContext } from '../../../store/storeContext';
import { deleteCategory } from '../../../store/actions';
import useStyles from './DeleteCategory.style';

export default function DeleteCategory({ category }) {
  const classes = useStyles();
  const { dispatch } = useStoreContext();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(!open);
  };

  const handleDeleteCategory = () => {
    setOpen(!open);
    dispatch(deleteCategory(category));
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
            onClick={handleClose}
            className={classes.actionButton}
            color="secondary"
          >
            Cancel
          </Button>
          <Button
            onClick={handleDeleteCategory}
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

DeleteCategory.propTypes = {
  category: propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  }),
};

DeleteCategory.defaultProps = {
  category: {
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  },
};
