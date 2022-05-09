import { RECEIVE_COSTS, UPDATE_FREQUENCY } from '../actions'

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
      return action.costs
    default:
      return state
  }
}

export default costs
