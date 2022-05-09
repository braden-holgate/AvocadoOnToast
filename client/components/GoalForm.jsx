import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addGoal } from '../actions'
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
};

function GoalForm() {

  const [ratingValue, setRatingValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setRatingValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  const [formData, setFormData] = useState({
    author: '',
    content: '',
    rating: ratingValue,
    date: new Date(Date.now())
  })

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onShare = (e) => {
    e.preventDefault()
    dispatch(addGoal(formData))
    setFormData({
      author: '',
      content: '',
      rating: ratingValue,
      date: new Date(Date.now())
    })
  }

  return (
    <>
    <div>
    <strong>
            <label className="mr-2">Share your goal with others who are trying to reach financial freedom</label>
          </strong>
          <input
            name="content"
            type="text"
            style={{ width: '200px', padding: '5px', margin: '15px', border: '1px solid #ccc' }}
            placeholder="Enter your goal here"
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
            style={{ width: '200px', padding: '5px', margin: '15px', border: '1px solid #ccc' }}
            placeholder="Enter your name here"
            onChange={handleChange}
          />
      </div>
      <div>
      <strong>
          <label className="mr-2">Your rating:</label>
      </strong>

      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              name="ratingValue"
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || ratingValue) > index ? colors.orange : colors.grey}
              style={{
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
    </div>
      <button onClick={onShare} type='submit'>Share</button>
    </>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }

};

export default GoalForm
