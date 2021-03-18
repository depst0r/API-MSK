import React from 'react'

export const App = () => {

fetch('https://cloud.mail.ru').then(res => res.json()).then(res => console.log(res))

  return<>
    <h1>ADD FOLDER</h1>
  </>

}