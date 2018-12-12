import React, { Component} from 'react'
import { View, Text, FlatList} from 'react-native'
import Trip from './Trip'
import isIphoneX from '../../utils/isIphoneX'
import MapView from 'react-native-maps'

class TripsScreen extends Component {

  static navigationOptions = {
    header: null
  }

  renderItem = item => {
    return <Trip onPress={() => this.props.navigation.navigate('Trip')} title={item.item.name} price={item.item.price}/>
  }

  render () {
    console.log(isIphoneX())
    const trips = [
      {id: '1', name: 'Eurotrip 2019', price: 'R$ 5000'},
      {id: '2', name: 'Expedição Jurassic Park', price: 'R$ 4500'}
    ]

    return (
      <View style={{
        backgroundColor: 'blue',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch'
      }}>
        <View style={{
          backgroundColor: 'red',
          flex: 1
        }}>
          <MapView 
            style={{
              flex: 1
            }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
        </View>
        <View style={{
          backgroundColor: 'white'
        }}>

          <FlatList
            data={trips}
            renderItem={this.renderItem}
            horizontal
            pagingEnabled
            keyExtractor={item => item.id}
            style={
              isIphoneX() ? { marginBottom: 20 } : null
            }
          />
        </View>
      </View>
    )
  }
}

export default TripsScreen