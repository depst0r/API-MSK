import React from 'react'

export const Api = () => {
    fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random")
        .then(res => res.json())
        .then(res => console.dir(res))
}