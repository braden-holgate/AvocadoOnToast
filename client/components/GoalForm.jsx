import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addGoal } from '../actions'

function GoalForm() {

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
      </div>
      <button onClick={onShare} type='submit'>Share</button>
    </>
  )
}

export default GoalForm
