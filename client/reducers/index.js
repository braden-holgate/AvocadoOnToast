import { combineReducers } from 'redux'
import costs from './costs'
import financials from './financials'

export default combineReducers({
  costs,
  financials,
})
