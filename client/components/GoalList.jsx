import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Goal from './Goal'
import GoalForm from './GoalForm'
import Nav from './Nav'
import { getGoals } from '../actions'

function GoalList() {
  const dispatch = useDispatch()

  const goals = useSelector((state) => state.goals)

  useEffect(() => {
    dispatch(getGoals())
  }, [])

  return (
    <>
      <Nav />

      <div>
        <GoalForm />
      </div>
      <br />
      <br />

      <div>
        {goals?.map((goal, i) => (
          <Goal key={i} goal={goal} />
        ))}
      </div>
    </>
  )
}

export default GoalList
