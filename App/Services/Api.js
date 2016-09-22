// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import Reactotron from 'reactotron'

// our "constructor"
const create = (baseURL = 'https://restaurant-server.herokuapp.com/api') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  // Wrap api's addMonitor to allow the calling code to attach
  // additional monitors in the future.
  const addMonitor = api.addMonitor((response) => {
    // Monitors are called passively after every request.
    Reactotron.apiLog(response)
  })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const getRestaurants = (searchObj) => api.get('/restaurants', searchObj)
  const getYelpInfo = (id) => {
    api.get(`/details/getYelp/${id}`)
      .then(res => {
        const yelpId = res.data[0].url.split('/')[4]
        return api.get(`/details/yelp/${yelpId}`)
      })
    }
  const getCrosswalk = (id) => api.get(`/details/crosswalk/${id}`);

  const getOneRestaurant = (id) => api.get(`/restaurants/${id}`);


  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    getRestaurants,
    getYelpInfo,
    getCrosswalk,
    getOneRestaurant,
    // additional utilities
    addMonitor
  }
}

// let's return back our create method as the default.
export default {
  create
}
