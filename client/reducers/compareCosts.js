import {SET_COMPARE_COSTS, UPDATE_COMPARE_COSTS_FREQUENCY } from '../actions'

const initialState = [
  {
    id: null,
    item: null,
    cost: null,
    frequency: null,
  },
]

function compareCosts(state = initialState, action) {
  switch (action.type) {
    case SET_COMPARE_COSTS:
      return action.compareCosts
    case UPDATE_COMPARE_COSTS_FREQUENCY:
      return action.compareCosts
    default:
      return state
  }
}

export default compareCosts
