import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native';

class ForecastForm extends Component {
    render() {
        return (
            <View>
                <View style={styles.inputView}>
                    <Image
                        source={require('../assets/images/search_icon.png')} 
                        style={styles.ImageStyle}
                    />
                    <TextInput 
                        onChangeText={this.props.onChangeText}
                        onSubmitEditing={this.props.onSubmitEditing}
                        style={{ flex: 1 }}
                        placeholder="Rechercher une ville"
                        underlineColorAndroid="transparent"
                        value={this.props.value}
                    />
                </View>
            </View>
        )}
}

const styles = StyleSheet.create({
    inputView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 50,
        borderRadius: 10,
        margin: 10,
        marginTop: 50
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    }
  });

export default ForecastForm