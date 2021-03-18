import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../Redux/Action/Actions'

export const App = () => {

  const dispatch = useDispatch()
  const selector = useSelector(state => state.rootReducer)

  useEffect(() => {
    dispatch(
      fetchPosts()
    )
  }, [])


  return<>
    
  </>

}