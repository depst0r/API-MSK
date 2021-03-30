import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import { Input } from '@material-ui/core'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}))

export const UpdateCard = ({ arr }) => {
  const classes = useStyles()

  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)
  const [editValue, setEditValue] = useState('')

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    setEditValue(arr)
  }, [arr])

  console.log(editValue)

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{arr.userId}</h2>
      {/* <Select labelId="simple-select-label" id="demo-simple-select" value="1">
        <MenuItem value="1"></MenuItem>
      </Select> */}
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            value={editValue?.body}
            onChange={e => setEditValue({ ...editValue, body: e.target.value })}
            id="standard-required"
            label="BODY"
            defaultValue="Hello World"
          />
        </div>
      </form>
    </div>
  )

  return (
    <div>
      <Button size="small" color="primary" onClick={handleOpen}>
        EDIT
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  )
}
