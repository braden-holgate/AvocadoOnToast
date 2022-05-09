import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addGoal } from '../actions'
import { FaStar } from "react-icons/fa";
{/* <FontAwesomeIcon icon="fa-light fa-face-smile-beam" /> */}

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
  
};

function GoalForm() {

  const [rating, setRating] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setRating(value)
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
    rating: ''
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
      rating: ''
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
            // defaultValue=''
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
            // defaultValue=''
            onChange={handleChange}
          />
      </div>
      <div>
      <strong>
          <label className="mr-2">Your rating:</label>
      </strong>
      {/* /////rating star test */}
      {/* <div style={styles.container}> */}
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              name="rating"
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || rating) > index ? colors.orange : colors.grey}
              style={{
                // marginRight: 10,
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
