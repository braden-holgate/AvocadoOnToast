import { combineReducers } from 'redux'
import costs from './costs'
import compareCosts from './compareCosts'
import financials from './financials'
import goals from './goals'

export default combineReducers({
  costs,
  compareCosts,
  financials,
  goals,
})
