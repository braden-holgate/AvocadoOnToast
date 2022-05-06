import request from 'superagent'

export const RECEIVE_COSTS = 'RECEIVE_COSTS'
export const UPDATE_FREQUENCY = 'UPDATE_FREQUENCY'
export const LOAD_FINANCIALS = 'LOAD_FINANCIALS'
export const SHOW_ERROR = 'SHOW_ERROR'

// ACTION CREATORS
export function recieveCosts(costs) {
  return {
    type: RECEIVE_COSTS,
    costs,
  }
}

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage,
  }
}

export function updateFrequency(costs) {
  return {
    type: UPDATE_FREQUENCY,
    costs,
  }
}

export function loadFinancials(financials) {
  return {
    type: LOAD_FINANCIALS,
    financials,
  }
}

// THUNKS

export function getCosts() {
  return (dispatch) => {
    return request
      .get('/api/v1/costs/')
      .then((res) => {
        dispatch(recieveCosts(res.body))
        return null
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
