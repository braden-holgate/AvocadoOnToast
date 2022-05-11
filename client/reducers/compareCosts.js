import {SET_COMPARE_COSTS, UPDATE_COMPARE_COSTS_FREQUENCY, DELETE_COMPARE_COST_BY_ID } from '../actions'

const initialState = [
  {
    id: null,
    item: null,
    cost: null,
    frequencyPerWeek: null,
  },
]

function compareCosts(state = initialState, action) {
  switch (action.type) {
    case SET_COMPARE_COSTS:
      return JSON.parse(JSON.stringify(action.compareCosts))
    case UPDATE_COMPARE_COSTS_FREQUENCY:
      return state.map((item) => {
        if (item.id == action.id) {
          item.frequencyPerWeek = action.frequencyPerWeek
        }
        return item
      })
    case DELETE_COMPARE_COST_BY_ID:
      return state.filter((item) => item.id !== action.id)
    default:
      return state
  }
}

export default compareCosts
