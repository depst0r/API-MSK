import React, {useState} from 'react'


export const Pagination = ({ perPage, totalCards, paginate}) => {

  const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCards / perPage); i++) {
        pageNumbers.push(i)
    }
console.log(pageNumbers)
    return<>
        <ul>
            {pageNumbers?.map(number => (
                <li key={number}>
                    <a href="#"
                        onClick={() => paginate(number)}
                    >
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </>
}