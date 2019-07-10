import React from 'react';
import { Text, View, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import styles from '../components/appStyle';

import 'react-native-bootstrap-grid';

export default class MainMenu extends React.Component {
    render() {
        return (
            <View style={[styles.mainMenu]}>
                <Text style={styles.menuOptions} onPress={this.props.profileHandler}>Dean</Text>
                <Text style={styles.menuOptions} onPress={this.props.bagHandler}>Bag</Text>
            </View>
        );
    }

}