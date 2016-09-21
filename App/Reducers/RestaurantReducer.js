import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  userLocation: null,
  retaurants: null,
  currRestaurant: null
})

// request temp
const setUserLocation = (state, action) =>
  state.merge({
    userLocation: action.userLocation
  })


// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.SET_USER_LOCATION]: setUserLocation,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
