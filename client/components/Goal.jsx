import React from 'react'

function Goal(props) {
  const { id, content, author, rating, date } = props.goal
  return (
    <div>
      <p>{author}</p>
      <p>{new Date(date).toDateString()}</p>
      <p>{content}</p>
      <p>{rating}</p>
    </div>
  )
}
  
export default Goal

