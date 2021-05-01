import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class ForecastChosenCity extends Component {
    render() {
        return (
            <View>
                <Text style={styles.nameCity}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    nameCity: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 50,
        fontFamily: 'Montserrat'
    },
})

export default ForecastChosenCity;
