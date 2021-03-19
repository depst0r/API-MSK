import React from 'react'
import Box from '@material-ui/core/Box';
import { Cards } from '../Cards/Cards'
import { AddCards } from '../AddCards/AddCards'



export const App = () => {

  return<>
    <Box>
      <AddCards/>
        <Cards />
    </Box>
  </>

}