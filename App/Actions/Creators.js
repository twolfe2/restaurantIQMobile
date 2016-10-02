import Types from './Types'

const attemptLogin = (username, password) =>
  ({ type: Types.LOGIN_ATTEMPT, username, password })

const loginSuccess = (username) =>
  ({ type: Types.LOGIN_SUCCESS, username })

const loginFailure = (errorCode) =>
  ({ type: Types.LOGIN_FAILURE, errorCode })

const logout = () => ({ type: Types.LOGOUT })

const startup = () => ({ type: Types.STARTUP })

const requestTemperature = (city) => ({ type: Types.TEMPERATURE_REQUEST, city })
const receiveTemperature = (temperature) => ({ type: Types.TEMPERATURE_RECEIVE, temperature })
const receiveTemperatureFailure = () => ({ type: Types.TEMPERATURE_FAILURE })

const setUserLocation = (userLocation) => ({type: Types.SET_USER_LOCATION, userLocation})

const restaurantsRequest = (searchObj) => ({type: Types.RESTAURANTS_REQUEST, searchObj})
const receiveRestaurants = (restaurants) => ({type: Types.RECEIVE_RESTAURANTS, restaurants})
const receiveRestaurantsFailure = () => ({type: Types.RESTAURANTS_FAILURE})

const restaurantSelect = (restaurantObj) => ({type: Types.RESTAURANT_SELECT, restaurantObj})
const restaurantDetails = (id) => ({type: Types.RESTAURANT_DETAILS, id})
const receiveRestaurantDetails = (restaurantInfo) => ({type: Types.RECEIVE_RESTAURANT_DETAILS, restaurantInfo})
const receiveRestaurantDetailsFailure = () => ({type: Types.RECEIVE_RESTAURANT_DETAILS_FAILURE})
/**
 Makes available all the action creators we've created.
 */
export default {
  attemptLogin,
  loginSuccess,
  loginFailure,
  logout,
  startup,
  requestTemperature,
  receiveTemperature,
  receiveTemperatureFailure,
  setUserLocation, 
  restaurantsRequest,
  receiveRestaurants,
  receiveRestaurantsFailure,
  restaurantSelect,
  restaurantDetails,
  receiveRestaurantDetails,
  receiveRestaurantDetailsFailure
}
