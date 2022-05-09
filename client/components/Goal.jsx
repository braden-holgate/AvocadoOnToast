import React from 'react'

function Goal(props) {
  const { id, content, author, rating, date } = props.goal
  return (
    <div>
      <p>
        <strong>{author}</strong> 
      </p>
      <p>Date: {new Date(date).toDateString()}</p>
      <p>{content}</p>
      <p>Rating: {rating}</p>
    </div>
  )
}
  
export default Goal

