import React, { useState } from 'react'
import Box from '@material-ui/core/Box';
import { Cards } from '../Cards/Cards'
import { AddCards } from '../AddCards/AddCards'
import { useSelector } from 'react-redux';
import { Pagination } from '../Pagination/Pagination';



export const App = () => {

  const selector = useSelector(state => state)
  console.log(selector)

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  const indexOffLastPost = currentPage * postsPerPage
  const indexOffFirstPost = indexOffLastPost - postsPerPage
  const currentPosts = selector?.combineCards?.cards?.slice(indexOffFirstPost, indexOffLastPost)

  const paginate = pageNumber => setCurrentPage(pageNumber)

console.log(selector?.combineCards?.cards.length)

  return<>
    <Box
    alignContent="flex-start"
    display="flex"
    flexWrap="wrap"
    >
      <AddCards/>
        <Cards cards={currentPosts}/>
        <Pagination 
          postsPerPage={postsPerPage}
          totalCards={selector?.combineCards?.cards.length}
          paginate={paginate}
        />
    </Box>
  </>

}