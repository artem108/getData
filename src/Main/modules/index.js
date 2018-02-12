import { getPeople } from '../../api'

const GET_DATA = 'GET_DATA'
const GET_DATA_OK = 'GET_DATA_OK'
const GET_DATA_ERR = 'GET_DATA_ERR'

const initialState = []

export function getData() {
  return (dispatch) => {
      dispatch({
      type: 'GET_DATA',
      data: 'Loading...'
    })
    getPeople()
      .then(response => {
        dispatch({
            type: 'GET_DATA_OK',
            data: response.data.results
          })
        })
      }
    }

export default function (state = initialState, action) {

  switch (action.type) {
  case GET_DATA:
    return { ...state, data: 'Loading...' }
  case GET_DATA_OK:
    return { ...state, content: action.data }

  default:
    return state;
  }
}
