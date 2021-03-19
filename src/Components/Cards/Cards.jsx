import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, fetchUsers, removeCard } from '../../Redux/Action/Actions'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: 300
  },
  id: {
    fontSize: 14,
  },
  email: {
    marginBottom: 12,
  },
});


export const Cards = () => {

  const classes = useStyles()
  
    const dispatch = useDispatch()
    const selector = useSelector(state => state)

    useEffect(() => {
        dispatch(
          fetchPosts()
        )
      }, [])
    
      useEffect(() => {
        dispatch(
          fetchUsers()
        )
      }, [])

    return<>
{ selector?.users?.map(res => ( 
         <Card className={classes.root} variant="outlined" key={res.id} >
         <CardContent>
           <Typography className={classes.id} color="textSecondary" gutterBottom>
              {res.id}
           </Typography>
           <Typography variant="h5" component="h2">
             {res.name}
           </Typography>
           <Typography className={classes.email} color="textSecondary">
             {res.email}
           </Typography>
           <Typography variant="body2" component="p">
           </Typography>
         </CardContent>
         <CardActions>
           <Button 
           size="small"
           color="secondary"
           onClick={() => dispatch(removeCard(res.id))}
           >
             Delet
           </Button>
         </CardActions>
       </Card>
))}   
    </>
}