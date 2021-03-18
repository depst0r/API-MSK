import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, fetchUsers } from '../../Redux/Action/Actions'

import 'bootstrap/dist/css/bootstrap.css'

export const App = () => {

  const dispatch = useDispatch()
  const selector = useSelector(state => state.rootReducer)

  useEffect(() => {
    dispatch(
      fetchPosts(),
      fetchUsers()
    )
  }, [])

  useEffect(() => {
    dispatch(
      fetchUsers()
    )
  }, [])

  return<>
    
  </>

}