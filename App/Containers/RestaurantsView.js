import React from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Tabs, View, Spinner } from 'native-base'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
import RestaurantsList from './RestaurantsList'
import RestaurantsMap from './RestaurantsMap'
import myTheme from '../Themes/NativeBase/myTheme'

// Styles
import styles from './Styles/RestaurantsViewStyle'

class RestaurantsView extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    const { searchLoading } = this.props
    let output = <Content><Spinner color='blue' /></Content>
    if(!searchLoading) {
      output = (
        <View theme={myTheme}>
          <Tabs tabTextColor='blue'>
            <Content tabLabel='List' tabTextColor='red'>
              <RestaurantsList />
            </Content>
            <RestaurantsMap tabLabel='Map' tabTextColor='green' />
          </Tabs>
        </View>
      )
    }
    return (
      <Container style={styles.container}>
        {output}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchLoading: state.restaurant.sear
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsView)
