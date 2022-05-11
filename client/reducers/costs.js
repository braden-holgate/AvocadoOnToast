import { RECEIVE_COSTS, SET_COSTS, UPDATE_FREQUENCY, DELETE_COSTS } from '../actions'

const initialState = [
  {
    id: null,
    item: null,
    cost: null,
    frequencyPerWeek: null,
  },
]

function costs(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_COSTS:
      const newCosts = action.costs.map((item) => {
        item.frequencyPerWeek = 0
        return item
      })
      return newCosts
    case UPDATE_FREQUENCY:
      // return action.costs
      return state.map((item) => {
        if (item.id == action.id) {
          item.frequencyPerWeek = action.frequencyPerWeek
        }
        return item
      })
    case SET_COSTS:
      return JSON.parse(JSON.stringify(action.costs))
    case DELETE_COSTS:
      return state.filter((item) => item.id !== action.id)

    default:
      return state
  }
}

export default costs
