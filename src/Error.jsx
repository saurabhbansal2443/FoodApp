import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {

    let err = useRouteError();
    // console.log(err)
  return (
    <div>
      <h1> This is my personal error page </h1>
      <h2> Lorem ipsum dolor sit amet.</h2>
      <p> {err.status} Page not found </p>
    </div>
  )
}

export default Error
