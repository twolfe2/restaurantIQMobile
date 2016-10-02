import React from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Tabs, View, Spinner } from 'native-base'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
import myTheme from '../Themes/NativeBase/myTheme'

// Styles
import styles from './Styles/RestaurantDetailsStyle'

class RestaurantDetails extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    const { detailsLoading } = this.props
    let output = <Content><Spinner color='blue' /></Content>
    if(!detailsLoading) {
      output = (
        <Content>
          <Text>hello</Text>
        </Content> 





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
    detailsLoading: state.restaurant.detailsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetails)
