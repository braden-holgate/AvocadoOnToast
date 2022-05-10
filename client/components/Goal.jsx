import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteOneGoal, getGoals } from '../actions'
import { FaStar } from 'react-icons/fa'

function Goal(props) {
  const { id, content, author, rating, date } = props.goal
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteOneGoal(id))
    dispatch(getGoals())
  }

  const stars = Array(rating).fill(0)

  return (
    <div>
      <div style={styles.stars}>
        <p>
          <strong>{author}</strong> &emsp; &emsp; Date:
          {new Date(date).toDateString()}
          &emsp; &emsp;
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                name="ratingValue"
                size={20}
                color="#FFBA5A"
              />
            )
          })}
        </p>
      </div>
      <p>
        Goal:&ensp;{content}
        &emsp; &emsp; &emsp; &emsp;
        <button>✏️</button>
        &emsp;
        <button onClick={() => handleDelete(id)}>🗑️</button>
      </p>
      <br />
    </div>
  )
}

const styles = {
  stars: {
    display: 'flex',
    flexDirection: 'row'
  }
}

export default Goal
