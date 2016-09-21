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
    
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.props.setUserLocation(position)
      },
      (error) => console.log(error)
    )
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
                                  <Input placeholder='Enter a resturant name or cuisene' />
                              </InputGroup>
                          </ListItem>
                      
                          <ListItem>
                              <InputGroup>
                                  <Icon name='ios-navigate-outline' />
                                  <Input placeholder='Enter a location' secureTextEntry={true}/>
                              </InputGroup>
                          </ListItem>
                        </List>
                        <Button block>Search</Button>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserLocation: (userLocation) => dispatch(Actions.setUserLocation(userLocation))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)
