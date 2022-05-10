import { GET_GOALS, UPDATE_GOAL, REMOVE_GOAL, ADD_GOAL } from '../actions'

const initialState = []

function goals(state = initialState, action) {
  const allIds = state.map((plant) => plant.id)
  const maxId = Math.max(...allIds)

  switch (action.type) {
    case GET_GOALS:
      return action.goals

    case ADD_GOAL:
      action.plant.id = maxId + 1
      return [...state, action.newGoal] //might need format work here

    case UPDATE_GOAL:
      state.forEach((goal) => {
        if (goal.id === action.id) {
          goal = action.newGoal
        }
      })
      return [...state]

    case REMOVE_GOAL:
      return state.filter((goal) => goal.id !== action.id)

    default:
      return state
  }
}

export default goals
