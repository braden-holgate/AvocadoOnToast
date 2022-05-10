import request from 'superagent'

export function fetchGoals() {
  return request
    .get('/api/v1/goals')
    .then((response) => response.body)
    .catch(errorHandler('GET', `/api/v1/goals`))
}

export function postGoal(newGoal) {
  return request
    .post('/api/v1/goals')
    .send(newGoal)
    .then((response) => response.body)
    .catch(errorHandler('POST', `/api/v1/goals`))
}

export function delGoal(id) {
  return (
    request
      .delete(`/api/v1/goals/${id}`)
      // .then((response) => response.body)
      .then((response) => response.body)
      .catch(errorHandler('DELETE', `/api/v1/goals/${id}`))
  )
}

export function patchGoal(id, info) {
  return request
    .patch(`/api/v1/goals/${id}`)
    .send(info)
    .then((response) => response.body)
    .catch(errorHandler('PATCH', `/api/v1/goals/${id}`))
}

function errorHandler(method, route) {
  return (err) => {
    if (err.message === 'Not Found') {
      throw Error(
        `Error: You need to implement an API route for ${method} ${route}`
      )
    } else {
      throw Error(`${err.message} on ${method} ${route}`)
    }
  }
}
