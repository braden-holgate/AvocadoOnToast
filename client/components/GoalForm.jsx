import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getGoals, saveNewGoal } from '../actions'
import { FaStar } from 'react-icons/fa'

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
}

function GoalForm() {
  const [ratingValue, setRatingValue] = useState(0)
  const [hoverValue, setHoverValue] = useState(undefined)
  const [formData, setFormData] = useState({
    author: '',
    content: '',
    rating: 0,
    date: new Date(Date.now()),
  })

  const dispatch = useDispatch()

  const stars = Array(5).fill(0)

  const handleClick = (value) => {
    setRatingValue(value)
    setFormData({
      ...formData,
      rating: value,
    })
  }

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue)
  }

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const onShare = (e) => {
    e.preventDefault()
    dispatch(saveNewGoal(formData))
    // dispatch(getGoals())
    setRatingValue(0)
    setHoverValue(undefined)
    setFormData({
      author: '',
      content: '',
      rating: 0,
      date: new Date(Date.now()),
    })
  }

  return (
    <div className='goal-form'>
      <div >
        <strong>
          <label className="mr-2">
            What's your thought? Any financial goal to share?
          </label>
          {/* <label className="mr-2">
            Share your goal with others who are trying to reach financial
            freedom
          </label> */}
        </strong>
        <input
          name="content"
          type="text"
          style={{
            width: '200px',
            padding: '5px',
            margin: '15px',
            border: '1px solid #ccc',
          }}
          placeholder="Enter your goal here"
          value={formData.content}
          onChange={handleChange}
        />
      </div>
      <div>
        <strong>
          <label className="mr-2">Your name:</label>
        </strong>
        <input
          name="author"
          type="text"
          style={{
            width: '200px',
            padding: '5px',
            margin: '15px',
            border: '1px solid #ccc',
          }}
          placeholder="Enter your name here"
          value={formData.author}
          onChange={handleChange}
        />
      </div>
      <div style={styles.stars}>
        <strong>
          <label className="mr-2">Rate your satisfaction with our app:</label>
        </strong>
        {/* <div style={styles.stars}> */}
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              name="ratingValue"
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || ratingValue) > index
                  ? colors.orange
                  : colors.grey
              }
              style={{
                cursor: 'pointer',
              }}
            />
          )
        })}
        {/* </div> */}
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        <button onClick={onShare} type="submit">
          Share
        </button>   
      </div>  
    </div>
   
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
  },
  textarea: {
    border: '1px solid #a9a9a9',
    borderRadius: 5,
    padding: 10,
    margin: '20px 0',
    minHeight: 100,
    width: 300,
  },
  button: {
    border: '1px solid #a9a9a9',
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
}

export default GoalForm
