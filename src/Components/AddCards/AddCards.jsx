import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FiberNewIcon from '@material-ui/icons/FiberNew';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export const AddCards = () => {
    const classes = useStyles();

    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<FiberNewIcon />}
        >
          Add Card
        </Button>
      </div>
    )
}