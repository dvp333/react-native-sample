import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import TripsScreen from './src/screens/TripsScreen'
import TripScreen from './src/screens/TripScreen'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Trips: TripsScreen,
  Trip: TripScreen
}, {initialRouteName: 'Trips'})

export default createAppContainer(AppNavigator)
