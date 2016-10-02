import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  userLocation: null,
  retaurants: null,
  currRestaurant: null,
  currRestaurantDetails: null,
  failure: false,
  searchLoading: false,
  detailsLoading: false
})

// request temp
const setUserLocation = (state, action) =>
  state.merge({
    userLocation: action.userLocation,
    failure: false,
    searchLoading: false
  })

const receiveRestaurants = (state, action) => 
  state.merge({
    restaurants: action.restaurants,
    failure: false,
    searchLoading: false
  })

const receiveRestaurantsFailure = (state, action) => 
  state.merge({
    restaurants: null,
    failure: true,
    searchLoading: false
  })

const restaurantsRequest = (state, action) => 
  state.merge({
    searchLoading: true
  })

const restaurantSelect = (state, action) => 
  state.merge({
    currRestaurant: action.restaurantObj, 
    detailsLoading: true
  })


const receiveRestaurantDetails = (state, action) => 
  state.merge({
    currRestaurantDetails: action.restaurantInfo,
    detailsLoading: false,
    failure: false
  })

const receiveRestaurantDetailsFailure = (state,action) => 
  state.merge({
    failure: true,
    restaurantDetails: null,
    detailsLoading: false
  })


// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.SET_USER_LOCATION]: setUserLocation,
  [Types.RECEIVE_RESTAURANTS]: receiveRestaurants,
  [Types.RESTAURANTS_REQUEST]: restaurantsRequest,
  [Types.RESTAURANTS_FAILURE]: receiveRestaurantsFailure,
  [Types.RESTAURANT_SELECT]: restaurantSelect,
  [Types.RECEIVE_RESTAURANT_DETAILS]: receiveRestaurantDetails,
  [Types.RECEIVE_RESTAURANT_DETAILS_FAILURE]: receiveRestaurantDetailsFailure
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
