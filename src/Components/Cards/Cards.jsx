import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, fetchUsers, removeCard, combineCards } from '../../Redux/Action/Actions'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { EditCard } from '../EditCards/EditCards'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: 300,
  },
  id: {
    fontSize: 14,
  },
  email: {
    marginBottom: 12,
  },
})

export const Cards = ({ cards }) => {
  const classes = useStyles()

  const dispatch = useDispatch()
  const selector = useSelector(state => state)

  const [editCard, setEditCard] = useState(null)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  useEffect(() => {
    const combinePosts = selector?.posts?.map(post => ({
      ...post,
      user: selector?.users?.find(user => post.userId === user.id),
    }))

    return dispatch(
      combineCards({
        cards: combinePosts,
      })
    )
  }, [selector.posts, selector.users])

  return (
    <>
      <EditCard updateСard={editCard} />
      {cards?.map(res => (
        <Card className={classes.root} variant="outlined" key={res.id}>
          <CardContent>
            <Typography className={classes.id} color="textSecondary" gutterBottom>
              {res.id}
            </Typography>
            <Typography variant="h5" component="h2">
              {res.user?.name}
            </Typography>
            <Typography className={classes.email} color="textSecondary">
              {res.user?.email}
            </Typography>
            <Typography className={classes.email} color="textSecondary">
              {res.title}
            </Typography>
            <Typography variant="body2" component="p">
              {res.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="secondary" onClick={() => dispatch(removeCard(res.id))}>
              Delet
            </Button>
            <Button size="small" color="primary" onClick={() => setEditCard(res)}>
              EDIT
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  )
}
