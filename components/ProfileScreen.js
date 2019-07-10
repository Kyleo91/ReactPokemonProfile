import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../components/appStyle';


export default class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={[styles.appSize, styles.profileColour]}>
                <View style={styles.cardSize}>
                    <View style={styles.cardTop}>
                        <Text style={styles.cardTopText}>Trainer Profile</Text>
                    </View>
                    <View style={styles.cardMiddle}>
                        <View style={styles.infoTable}>
                            <Text style={styles.infoTableTitle}>Name:</Text><Text style={styles.infoTableData}>Dean</Text>
                            <Text style={styles.infoTableTitle}>ID:</Text><Text style={styles.infoTableData}>901271</Text>
                            <Text style={styles.infoTableTitle}>Born:</Text><Text style={styles.infoTableData}>16/08/1991</Text>
                            <Text style={styles.infoTableTitle}>PokéDex:</Text><Text style={styles.infoTableData}>522</Text>
                            <Text style={styles.infoTableTitle}>Money:</Text><Text style={styles.infoTableData}>£2,214</Text>
                            <Text style={styles.infoTableTitle}>Home:</Text><Text style={styles.infoTableData}>Rustboro City, Hoenn</Text>
                        </View>
                        <View style={styles.dkSprite}>
                            <Image source={require('../assets/DKSummer.png')} />
                        </View>
                    </View>
                    <View style={styles.cardBottom}>
                        <Text></Text>
                    </View>
                </View>
                <Text style={styles.returnToMenu} onPress={this.props.resetOpeningScreen}>&#60; Back</Text>
            </View>
        );
    }
}