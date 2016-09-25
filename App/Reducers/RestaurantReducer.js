import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  userLocation: null,
  retaurants: null,
  currRestaurant: null,
  failure: false,
  loading: false
})

// request temp
const setUserLocation = (state, action) =>
  state.merge({
    userLocation: action.userLocation,
    failure: false,
    loading: false
  })

const receiveRestaurants = (state, action) => 
  state.merge({
    restaurants: action.restaurants,
    failure: false,
    loading: false
  })

const receiveRestaurantsFailure = (state, action) => 
  state.merge({
    restaurants: null,
    failure: true,
    loading: false
  })

const restaurantsRequest = (state, action) => 
  state.merge({
    loading: true
  })


// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.SET_USER_LOCATION]: setUserLocation,
  [Types.RECEIVE_RESTAURANTS]: receiveRestaurants,
  [Types.RESTAURANTS_REQUEST]: restaurantsRequest,
  [Types.RESTAURANTS_FAILURE]: receiveRestaurantsFailure
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
