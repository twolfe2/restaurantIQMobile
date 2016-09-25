import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Card, CardItem, Button } from 'native-base';


// Styles
import styles from './Styles/SearchScreenStyle'


class SearchScreen extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      q: ''
    }
    
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.props.setUserLocation(position)
      },
      (error) => console.log(error)
    )
  }

  searchHandler() {
    const { latitude, longitude } = this.props.userLocation.coords
    let searchObj = { q: this.state.q, currLocation: { latitude , longitude  }}
    this.props.getRestaurants(searchObj)


  }

  render () {
    return (
      <View style={styles.container}>
         <Container>
            <Content>
              <Card>
                <CardItem>   
                  <List>
                    <ListItem>
                      <InputGroup>
                        <Icon name='ios-restaurant-outline' />
                        <Input placeholder='Enter a resturant name or cuisene' onChangeText={q => this.setState({q})}/>
                      </InputGroup>
                    </ListItem>
                  <ListItem>
                    <InputGroup>
                      <Icon name='ios-navigate-outline' disabled/>
                      <Input placeholder='Using your current location'  />
                    </InputGroup>
                  </ListItem>
                </List>
                <Button block onPress={() => this.searchHandler()}>Search</Button>
              </CardItem>
            </Card>
          </Content>
        </Container>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userLocation: state.restaurant.userLocation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserLocation: (userLocation) => dispatch(Actions.setUserLocation(userLocation)),
    getRestaurants: (searchObj) => dispatch(Actions.restaurantsRequest(searchObj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)
