import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Goal from './Goal'
import GoalForm from './GoalForm'
import { getGoals } from '../actions'

function GoalList() {
  const dispatch = useDispatch()

  const goals = useSelector((state) => state.goals)
  console.log(goals)

  useEffect(() => {
    dispatch(getGoals())
  }, [])

  return (
    <>
      <div>
        <GoalForm />
      </div>
      <div>
        {goals?.map((goal) => (
          <Goal key={goal?.id} goal={goal} />
        ))}
      </div>
    </>
  )
}

export default GoalList
