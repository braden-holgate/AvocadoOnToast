import { GET_GOALS, UPDATE_GOAL, REMOVE_GOAL, ADD_GOAL } from '../actions'

const initialState = []

function goals(state = initialState, action) {
  const allIds = state.map((goal) => goal.id)
  const maxId = Math.max(...allIds)

  switch (action.type) {
    case GET_GOALS:
      return action.goals

    case ADD_GOAL:
      action.newGoal.id = maxId + 1
      return [...state, action.newGoal]

    case UPDATE_GOAL:
      return state.map((goal) => {
        goal.id == action.id
          ? {
              ...action,
            }
          : goal
      })
    // state.forEach((goal) => {
    //   if (goal.id === action.id) {
    //     goal = action.newGoal
    //   }
    // })
    // return [...state]

    case REMOVE_GOAL:
      console.log('in reducer', id)
      return state.filter((goal) => goal.id !== action.id)

    default:
      return state
  }
}

export default goals
