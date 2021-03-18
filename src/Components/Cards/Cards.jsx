import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createLogger } from 'redux-logger'
import { fetchPosts, fetchUsers } from '../../Redux/Action/Actions'


export const Cards = () => {
  
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
console.log(selector?.users?.map(res => res.name))

    return<>
{ selector?.users?.map(res => ( 
        <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <div className="card-body">
            <button className="btn btn-outline-danger">X</button>
              <h5 className="card-title">{res.name}</h5>
              <p className="card-text">{res.email}</p>
              <button className="btn btn-outline-info"></button>
              <button className="btn btn-outline-dark"></button>
            </div>
          </div>
        </div>
          </div>
))}   
    </>
}