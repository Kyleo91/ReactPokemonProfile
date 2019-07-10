import React from 'react';
import { ImageBackground, TouchableWithoutFeedback } from 'react-native';
import styles from '../components/appStyle';
import MainMenu from '../components/MainMenu';


export default class OpeningScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { OpenMenu: false }
    }

    menuHandler() {
        this.setState({
            OpenMenu: true
        })
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => {this.props.pressHandler(); this.menuHandler()}}>
                <ImageBackground source={require('../assets/OpeningScreen.png')} style={styles.appSize}>
                    {(this.state.OpenMenu) ? <MainMenu profileHandler={this.props.profileHandler} bagHandler={this.props.bagHandler} /> : null}
                </ImageBackground>
            </TouchableWithoutFeedback>
        );
    }

}
