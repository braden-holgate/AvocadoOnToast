import request from 'superagent'

export const RECIEVE_COSTS = 'RECEIVE_COSTS'
export const LOAD_FREQUENCY = 'LOAD_FREQUENCY'
export const LOAD_FINANCIALS = 'LOAD_FINANCIALS'
export const SHOW_ERROR = 'SHOW_ERROR'

// ACTION CREATORS
export function recieveCosts(costs) {
  return {
    type: RECIEVE_COSTS,
    cost,
  }
}

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage,
  }
}

export function loadFrequency(freq) {}

// THUNKS

export function getCosts() {
  console.log('heelo')
  return (dispatch) => {
    return request
      .get('/api/v1/costs/')
      .then((res) => {
        console.log(res.body)
        dispatch(recieveCosts(res.body))
        return null
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
