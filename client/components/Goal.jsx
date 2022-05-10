import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteOneGoal } from '../actions'

function Goal(props) {
  const { id, content, author, rating, date } = props.goal
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteOneGoal(id))
  }

  return (
    <div>
      <p>
        <strong>{author}</strong>
      </p>
      <p>Date: {new Date(date).toDateString()}</p>
      <p>{content}</p>
      <p>Rating: {rating}</p>
      <br />
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  )
}

export default Goal
