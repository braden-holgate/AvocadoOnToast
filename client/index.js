import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import reducers from './reducers'
import App from './components/App'
import GoalList from './components/GoalList'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/goals" element={<GoalList />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <App /> */}
    </Provider>,
    document.getElementById('app')
  )
})
