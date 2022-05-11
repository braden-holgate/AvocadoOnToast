import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveNewGoal } from '../actions'
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
    <div className="goal-form">
      <div>
      <section className="columns">
        <strong>
          <label className="mr-2 column">
            What's your thought? Any financial goal to share?
          </label>
        </strong>
        <input
          className="input column"
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
         </section>
      </div>

      {/*   
      <section className="section subscribe columns">
        <div className="subscribe-words column is-7">
          Want to continue to learn and explore these ideas?
        </div>    

        <div className="navbar-item  column">
          <div className="button subscribe-button"><a target="_blank" href="https://www.mrmoneymustache.com/2012/12/18/your-money-or-your-life/">Learn More</a></div>
          <div className="button subscribe-button">About Us</div>
        </div>
      </section>
       */}

      <div >
      <section className="columns">
        <strong>
          <label className="mr-2 column ">Your name:</label>
        </strong>
        <input
          className="input column"
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
         </section>
      </div>

      <section className="columns goal-form-star">
      <div style={styles.stars}>
        <strong className=''>
          <label className="mr-2 rate-with-star">Rate your satisfaction with our app:</label>
        </strong>
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
        <button className="button" onClick={onShare} type="submit">
          Share
        </button>
         
      </div>
      </section>
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
