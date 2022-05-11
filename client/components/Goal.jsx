import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteOneGoal, updateAGoal } from '../actions'
import { FaStar } from 'react-icons/fa'

function Goal(props) {
  const { id, content, author, rating, date } = props.goal
  const stars = Array(rating).fill(0)

  const [input, setInput] = useState(false)
  const [formData, setFormData] = useState({
    author: author,
    content: content,
    rating: rating,
    date: date,
    id: id,
  })

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteOneGoal(id))
  }

  const handleClick = () => {
    setInput(true)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleEdit = (e) => {
    e.preventDefault()
    dispatch(updateAGoal(formData))
    setInput(false)
  }

  return (
    <div>
      <div style={styles.stars}>
        <p>
          <strong>{author}</strong> &emsp; &emsp; &emsp;
          {new Date(date).toLocaleDateString()}
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
        💬 &ensp;{content}
        &emsp; &emsp; &emsp; &emsp;

        <button onClick={() => handleDelete(id)}>🗑️</button>
        &emsp;
        {!input && <button onClick={handleClick}>✏️</button>}
      </p>
      {input && (
        <>
          <input
            name="content"
            type="text"
            style={{
              width: '200px',
              padding: '5px',
              margin: '15px',
              border: '1px solid #ccc',
            }}
            placeholder="Edit your goal"
            value={formData.content}
            onChange={handleChange}
          />
          <button onClick={handleEdit}>✏️</button>
        </>
      )}
      <br />
    </div>
  )
}

const styles = {
  stars: {
    display: 'flex',
    flexDirection: 'row',
  },
}

export default Goal
