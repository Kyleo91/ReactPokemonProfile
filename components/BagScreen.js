import React from 'react';
import { Text, ImageBackground } from 'react-native';
import styles from '../components/appStyle';


export default class ProfileScreen extends React.Component {
    render() {
        return (
            <ImageBackground source={require('../assets/BagBG.png')} resizeMode='repeat' style={styles.appSize}>
                <Text style={styles.returnToMenu} onPress={this.props.resetOpeningScreen}>&#60; Back</Text>
           </ImageBackground>
        );
    }
}