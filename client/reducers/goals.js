import { GET_GOALS, UPDATE_GOAL, REMOVE_GOAL, ADD_GOAL } from '../actions'

const initialState = []

function goals(state = initialState, action) {
  switch (action.type) {
    case GET_GOALS:
      return action.goals

    case ADD_GOAL:
      return [...state, action.newGoal]

    case UPDATE_GOAL:
      return state.map((goal) =>
        goal.id == action.newInfo.id ? action.newInfo : goal
      )

    case REMOVE_GOAL:
      return state.filter((goal) => goal.id !== action.id)

    default:
      return state
  }
}

export default goals
