import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants'
const initialState = {
  datamodle: [],
  isFetching: false,
  error: false
}

export default function dataResReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        datamodle: [],
        isFetching: true
      }
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        datamodle: action.data
      }
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}