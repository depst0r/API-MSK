import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { updateCards } from '../../Redux/Action/Actions'

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
    border: '2px solid #64b5f6',
    borderColor: '#64b5f6',
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

  const dispatch = useDispatch()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    setEditValue(arr)
  }, [arr])

  const handleSubmit = e => {
    e.preventDefault()

    if (editValue.title && editValue.body !== '') {
      dispatch(
        updateCards({
          editValue,
        })
      )
    }
  }

  console.log(editValue)

  const bodyPopUp = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">UPDATE CARD</h2>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          value={editValue?.title}
          onChange={e => setEditValue({ ...editValue, title: e.target.value })}
          label="TITLE"
        />
        <TextField
          value={editValue?.body}
          onChange={e => setEditValue({ ...editValue, body: e.target.value })}
          label="BODY"
        />
        <div className="button">
          <Button size="small" variant="contained" color="primary" type="submit">
            Save
          </Button>
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
        {bodyPopUp}
      </Modal>
    </div>
  )
}
