import { combineReducers } from 'redux'
import costs from './costs'
import financials from './financials'
import goals from './goals'

export default combineReducers({
  costs,
  financials,
  goals,
})
