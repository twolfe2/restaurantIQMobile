import React from 'react'
import { View, Text, ListView } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'

import AlertMessage from '../Components/AlertMessageComponent'

// Styles
import styles from './Styles/ListviewExampleStyle'

class RestaurantsList extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})
    const restaurants = this.props.restaurants
    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(restaurants)
    }
  }
  _renderRow (rowData) {
    return (
      <View style={styles.row}>
        <Text style={styles.boldLabel}>{rowData.name}</Text>
        <Text style={styles.label}>{rowData.rating}</Text>
      </View>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList)


