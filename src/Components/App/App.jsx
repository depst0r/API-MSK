import React from 'react'
import { Cards } from '../Cards/Cards'
import { AddCards } from '../AddCards/AddCards'



export const App = () => {

  return<>
    <div className='container'>
      <div className='row>'>
        <AddCards/>
        <Cards />
      </div>
    </div>
  </>

}