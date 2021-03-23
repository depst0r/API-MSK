import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import ListIcon from '@material-ui/icons/List'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux'
import { Input } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import { addCards } from '../../Redux/Action/Actions'

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      borderRadius: 50,
    }
  }));

export const AddCards = () => {

    const dispatch = useDispatch()
    const selector = useSelector(state => state)

    const [title, setTitle] = useState()
    const [body, setBody] = useState()
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
        <DialogTitle id="form-dialog-title">Create new card</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <Input
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondry">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    )
}