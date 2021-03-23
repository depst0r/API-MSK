import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }))

export const Pagination = ({ postsPerPage, totalCards, paginate}) => {
    
    const classes = useStyles()

  const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCards / postsPerPage); i++) {
        pageNumbers.push(i)
    }

   

    return<>
       <div className={classes.root}>
       {pageNumbers?.map(res => (
           <>
                 <Pagination count={res} shape="rounded" />
                 <Pagination count={res} variant="outlined" shape="rounded" />
                 </>
            // <button onClick={() => paginate(res)}>{res}</button>
        ))}
    </div>
    </>
}