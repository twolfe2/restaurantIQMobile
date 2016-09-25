import {take, call, put} from 'redux-saga/effects'
import R from 'ramda'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'


// This style of Saga is a common pattern.  It has a
// worker and a watcher.
//
// The watcher listens for the signal, and the worker
// does the job.

// We use a factory function will close over the scope of
// our watcher saga.  This ensures the API is passed in
// (hurray objects being composed).
export default (api) => {
  // ----------
  // The Worker
  // ----------

  function * worker (searchObj) {
    // make the call to the api
    const response = yield call(api.getRestaurants, searchObj)

    // success?
    if (response.ok) {
      const restaurants = response.data;

      yield put(Actions.receiveRestaurants(restaurants))
    } else {
      console.log('resp  fail', response);
      yield put(Actions.receiveRestaurantsFailure())
    }
  }

  // -----------
  // The Watcher
  // -----------

  function * watcher () {
    while (true) {
      const action = yield take(Types.RESTAURANTS_REQUEST)
      const { searchObj } = action
      console.log('searchObj', searchObj);
      yield call(worker, searchObj)
    }
  }

  // Expose both functions.  Now, technically, we're only
  // needing to return the watcher.  If we return both, we
  // gain 2 important properties:
  //
  // 1.  We can test the worker directly without need to
  // mock the watcher taking.
  //
  // 2.  We can call the worker from other sagas which is
  // often required in some flow control cases.
  return {
    watcher,
    worker
  }
}
