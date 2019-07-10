import React from 'react';
import { Text, View } from 'react-native';
import styles from './components/appStyle';
import OpeningScreen from './components/OpeningScreen';
import BagScreen from './components/BagScreen';
import ProfileScreen from './components/ProfileScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      OpenBag: false,
      OpenProfile: false,
      Pressed: false
    }

    this.openBagHandler = this.openBagHandler.bind(this);
    this.openProfileHandler = this.openProfileHandler.bind(this);
    this.resetOpeningScreen = this.resetOpeningScreen.bind(this);
    this.pressHandler = this.pressHandler.bind(this);
  }

  openBagHandler() {
    this.setState({
      OpenBag: true
    });
  }

  openProfileHandler() {
    this.setState({
      OpenProfile: true
    });
  }

  resetOpeningScreen() {
    this.setState({
      OpenBag: false,
      OpenProfile: false,
      Pressed: false
    });
  }

  pressHandler() {
    this.setState({ 
      Pressed: true 
    });
  }

  render() {
    return (
      <View style={styles.pokemonPCApplication}>
        {(!this.state.Pressed) ? <Text style={styles.instructions}>Press on the image below to open the Main Menu</Text> : <Text style={[styles.instructions,styles.invisible]}>Press on the image below to open the Main Menu</Text> }
        {(!this.state.OpenBag && !this.state.OpenProfile) ? <OpeningScreen bagHandler={this.openBagHandler} profileHandler={this.openProfileHandler} pressHandler={this.pressHandler} /> : null }
        {(this.state.OpenProfile) ? <ProfileScreen resetOpeningScreen={this.resetOpeningScreen} /> : null}
        {(this.state.OpenBag) ? <BagScreen resetOpeningScreen={this.resetOpeningScreen} /> : null}
      </View>
    );
  }

}
