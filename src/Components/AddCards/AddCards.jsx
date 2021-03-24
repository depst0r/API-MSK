import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import ListIcon from '@material-ui/icons/List'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { addCards } from '../../Redux/Action/Actions'

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: 500
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),
        borderRadius: 50,
      }
  }))

export const AddCards = () => {

    const dispatch = useDispatch()
    const selector = useSelector(state => state)

    const [select, setSelect] = useState(null)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [open, setOpen] = useState(false)

    const classes = useStyles()

    const handleClickOpen = () => {
        setOpen(true)
      }
    
      const handleClose = () => {
        setOpen(false)
      }

      const handleChangeSelect = e => {
        setSelect(e.target.value)
      }

      const handleChangeTitle = e => {
        setTitle(e.target.value)
      }

      const handleChangeBody = e => {
        setBody(e.target.body)
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
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">User Name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={select}
          onChange={handleChangeSelect}
        >
            {selector?.users?.map(user => (
                <MenuItem 
                value={user.name} 
                key={user.id}
                >
                    {user?.name}
                </MenuItem> 
            ))}
        </Select>
      </FormControl>
          <DialogContentText>
          <InputLabel id="title">Title</InputLabel>
          <Input
            autoFocus
            margin="dense"
            id="title"
            label="title"
            fullWidth
            value={title}
            onChange={handleChangeTitle}
          />
          </DialogContentText>
          <InputLabel id="body">Body</InputLabel>
          <Input
            autoFocus
            margin="dense"
            id="body"
            label="body"
            fullWidth
            value={body}
            onChange={handleChangeBody}
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