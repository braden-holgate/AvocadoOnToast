import request from 'superagent'
import { fetchGoals, postGoal, delGoal, patchGoal } from '../apis/goals'

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

export function addGoal(newGoal) {
  return {
    type: ADD_GOAL,
    newGoal,
  }
}

export function updateGoal(newInfo) {
  return {
    type: UPDATE_GOAL,
    newInfo,
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

//GOALS THUNK
export function getGoals() {
  return (dispatch) => {
    fetchGoals()
      .then((res) => {
        dispatch(saveAllGoals(res))
        return null
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function saveNewGoal(newGoal) {
  return (dispatch) => {
    postGoal(newGoal)
      .then((goalObj) => {
        dispatch(addGoal(goalObj))
        return null
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function deleteOneGoal(id) {
  return (dispatch) => {
    // return request
    //   .delete(`/api/v1/goals/${id}`)
    delGoal(id)
      .then((res) => {
        console.log('res:', res.body)
        dispatch(removeGoal(id))
        return null
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function updateAGoal(info) {
  return (dispatch) => {
    patchGoal(info)
      .then((res) => {
        dispatch(updateGoal(res))
        return null
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
