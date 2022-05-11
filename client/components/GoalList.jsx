import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Goal from './Goal'
import GoalForm from './GoalForm'
import Nav from './Nav'
import Subscribe from './Subscribe'
import Footer from './Footer'
import { getGoals } from '../actions'

function GoalList() {
  const dispatch = useDispatch()

  const goals = useSelector((state) => state.goals)

  useEffect(() => {
    dispatch(getGoals())
  }, [])

  return (
    <div id="wrapper">
      <Nav />

      <div className="goal-background">
        <GoalForm />
        <div className="line">
          ------------------------------------------------------------------------------
        </div>
        <div className="goal">
          {goals?.map((goal, i) => (
            <Goal key={i} goal={goal} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default GoalList
