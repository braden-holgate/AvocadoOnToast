import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'

export const RECEIVE_COSTS = 'RECEIVE_COSTS'
export const UPDATE_FREQUENCY = 'UPDATE_FREQUENCY'
export const LOAD_FINANCIALS = 'LOAD_FINANCIALS'

export const SET_COMPARE_COSTS = 'SET_COMPARE_COSTS'
export const UPDATE_COMPARE_COSTS_FREQUENCY = 'UPDATE_COMPARE_COSTS_FREQUENCY'

export const GET_GOALS = 'GET_GOALS'
export const UPDATE_GOAL = 'UPDATE_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'
export const ADD_GOAL = 'ADD_GOAL'

// ACTION CREATORS

//ERROR HANDLING
export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage,
  }
}

//COSTS & FINANCIALS
export function recieveCosts(costs) {
  return {
    type: RECEIVE_COSTS,
    costs,
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

// COMPARE COSTS
export function setCompareCosts(compareCosts) {
  return {
    type: SET_COMPARE_COSTS,
    compareCosts,
  }
}

export function updateCompareCostsFreqency(id, frequencyPerWeek) {
  return {
    type: UPDATE_COMPARE_COSTS_FREQUENCY,
    id,
    frequencyPerWeek,
  }
}

//GOALS

export function saveAllGoals(goals) {
  return {
    type: GET_GOALS,
    goals,
  }
}
//hmm possibly could rename one of these to be more consistent? i.e save and get are a bit confusing?

export function addGoal(newGoal) {
  return {
    type: ADD_GOAL,
    newGoal,
  }
}

export function updateGoal(id, newInfo) {
  return {
    type: UPDATE_GOAL,
    id,
    newGoal: newInfo,
  }
}

export function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id,
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

export function getGoals() {
  return (dispatch) => {
    return request
      .get('/api/v1/goals/')
      .then((res) => {
        dispatch(saveAllGoals(res.body))
        return null
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function saveNewGoal(newGoal) {
  return (dispatch) => {
    return request
      .post('/api/v1/goals/')
      .send(newGoal)
      .then((res) => {
        dispatch(addGoal(res.body))
        return null
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
