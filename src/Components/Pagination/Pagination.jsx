import React from 'react'

export const Pagination = ({ postsPerPage, totalCards, paginate}) => {

  const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCards / postsPerPage); i++) {
        pageNumbers.push(i)
    }

   

    return<>
        {pageNumbers?.map(res => (
            <button onClick={() => paginate(res)}>{res}</button>
        ))}
    </>
}