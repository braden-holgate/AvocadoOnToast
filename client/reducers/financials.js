import { LOAD_FINANCIALS } from '../actions'

const initialState = {
  income: null,
  incomePeriod: null,
  currentSavings: null,
  savings: null,
  savingsPeriod: null,
  hoursWorkedPerWeek: null,
}

export default function financials(state = initialState, action) {
  switch (action.type) {
    case LOAD_FINANCIALS:
      return action.financials

    default:
      return state
  }
}
