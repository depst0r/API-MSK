import React, { useState } from 'react'
import Box from '@material-ui/core/Box';
import { Cards } from '../Cards/Cards'
import { AddCards } from '../AddCards/AddCards'
import { useSelector } from 'react-redux';
import { Pagination } from '../Pagination/Pagination';



export const App = () => {

  const selector = useSelector(state => state)

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOffFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = selector?.combineCards?.cards?.slice(indexOffFirstPost, indexOfLastPost)

  const paginate = pageNumber => setPostsPerPage(pageNumber)

  return<>
    <Box
    alignContent="flex-start"
    display="flex"
    flexWrap="wrap"
    >
      <AddCards/>
        <Cards cards={currentPosts}/>
        <Pagination 
        />
    </Box>
  </>

}