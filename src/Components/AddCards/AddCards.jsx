import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import ListIcon from '@material-ui/icons/List'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      borderRadius: 50,
    }
  }));

export const AddCards = () => {

    const [open, setOpen] = useState(false)

    const classes = useStyles()

    const handleClickOpen = () => {
        setOpen(true)
      };
    
      const handleClose = () => {
        setOpen(false)
      }


    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<ListIcon />}
          onClick={handleClickOpen}
        >
          Add Card
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    )
}