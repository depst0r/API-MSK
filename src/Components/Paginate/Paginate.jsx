import React from 'react'
import Button from '@material-ui/core/Button'

export const Paginate = ({ postsPerPage, totalCards, paginate}) => {

  const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCards / postsPerPage); i++) {
        pageNumbers.push(i)
    }


    return<>
    {pageNumbers?.map(number => (
        <Button 
        onClick={() => paginate(number)} 
        color="primary"
        key={number}
        >
            {number}
            </Button>
        ))}

    </>
}