import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

// screens identified by the router
import SearchScreen from '../Containers/SearchScreen'
import RestaurantsView from '../Containers/RestaurantsView'
import RestaurantDetailsView from '../Containers/RestaurantDetails'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='searchScreen' component={SearchScreen} title='RestaurantIQ' renderLeftButton={NavItems.hamburgerButton} />
          </Scene>
        </Scene>
          <Scene key='restaurantsView' component={RestaurantsView}/>
          <Scene key='restaurantDetailsView' component={RestaurantDetailsView}/>
      </Router>
    )
  }
}

export default NavigationRouter
