import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants'

export function fetchDataFromAPI() {
  return (dispatch) => {
    dispatch(getDataRes())
    fetch('https://api.myjson.com/bins/typm1')
    .then(data => data.json())
    .then(json => {
      console.log('json:', json)
      dispatch(getDataResSuccess(json.results.values))
    })
    .catch(err => dispatch(getDataResFailure(err)))
  }
}

export function getDataRes() {
  return {
    type: FETCHING_DATA
  }
}

export function getDataResSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  }
}

export function getDataResFailure() {
  return {
    type: FETCHING_DATA_FAILURE
  }
}