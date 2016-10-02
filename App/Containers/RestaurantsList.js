import React from 'react'
import { View, Text, ListView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Button } from 'native-base';
import { Actions as NavigationActions } from 'react-native-router-flux'

import AlertMessage from '../Components/AlertMessageComponent'

// Styles
import styles from './Styles/RestaurantsListStyle'

class RestaurantsList extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
    const rowHasChanged = (r1, r2) => r1.factual_id !== r2.factual_id

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})
    const restaurants = this.props.restaurants
    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(restaurants)
    }
    this._renderRow = this._renderRow.bind(this)
  }
  restaurantClicked(restaurantData) {
    console.log('clicked', restaurantData )
    const {restaurantSelected, restaurantDetails, restaurantDetailsView } = this.props
    restaurantSelected(restaurantData)
    restaurantDetails(restaurantData.factual_id)
    restaurantDetailsView()
  }
  _renderRow (rowData) {
    return (
      <TouchableOpacity style={styles.row} onPress={() => this.restaurantClicked(rowData)}>
        <Text style={styles.boldLabel}>{rowData.name}</Text>
        <Text style={styles.label}>{rowData.rating}</Text>
      </TouchableOpacity>
    )
  }
  _noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    return (
      <View>
        <AlertMessage title='No restaurants found. Please search again.' show={this._noRowData()} />
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurant.restaurants
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    restaurantSelected: (restaurantObj) => dispatch(Actions.restaurantSelect(restaurantObj)),
    restaurantDetails: (id) => dispatch(Actions.restaurantDetails(id)),
    restaurantDetailsView: NavigationActions.restaurantDetailsView
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList)


