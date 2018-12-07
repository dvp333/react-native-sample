import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native'
import assets from './assets'
import styles from './styles'

class HomeScreen extends Component {

  state = {
    counter: 0
  }

  handleCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render () {
    return (
      <ImageBackground
        source={assets.background}
        imageStyle={{resizeMode: 'stretch'}}
        style={styles.background}
      >
        <View style={styles.wrapperLogoTripPlanner}>
          <Image source={assets.tripPlanner}/>
        </View>
        <View style={styles.wrapperLogoDevPleno}>
          <Image source={assets.devPleno}/>
        </View>
        <TouchableWithoutFeedback onPress={this.handleCounter}>
          <View style={styles.buttonBackground}>
            <Text style={styles.buttonText}>COMEÇAR! {this.state.counter} </Text>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    )
  }    
}

export default HomeScreen