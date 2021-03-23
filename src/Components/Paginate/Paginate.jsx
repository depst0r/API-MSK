import React from 'react'


export const Paginate = ({ postsPerPage, totalCards, paginate}) => {

  const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCards / postsPerPage); i++) {
        pageNumbers.push(i)
    }


    return<>
    {pageNumbers?.map(res => (
            <span onClick={() => paginate(res)}>{res}</span>
        ))}

    </>
}