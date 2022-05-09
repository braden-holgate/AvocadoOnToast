import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCosts } from '../actions'

function Test () {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getCosts())
  // })
  return (
    <div></div>
  )
}

export default Test
