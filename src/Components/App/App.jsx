import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, fetchPosts } from '../../Redux/Action/Actions'

export const App = () => {

  const dispatch = useDispatch()
  const selector = useSelector(state => state.rootReducer)

  useEffect(() => {
    dispatch(
      fetchUsers
    )
  }, [])

  useEffect(() => {
    dispatch(
      fetchPosts
    )
  }, [])

  console.log(fetchPosts())

  return<>
    
  </>

}