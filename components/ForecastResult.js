import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class ForecastTitle extends Component {
    render() {
        return (
            <View>
                <View style={[styles.container, {
                    flexDirection: "colomn",
                    alignItems: 'center'
                }]}>
                    <View style={[styles.container, {
                    flexDirection: "row",
                    alignItems: 'center'
                }]}>
                        <Text style={styles.weatherIcon}>
                            <Image 
                                style={{width: 100, height: 100, borderRadius: 10}} 
                                source={{uri: this.props.weather_icon}}
                            />
                        </Text>
                        <Text style={styles.weatherDescriptions}>
                            {this.props.weather_descriptions}  
                        </Text>
                    </View>
                    <View>
                        <View style={[styles.container, {
                    flexDirection: "colomn",
                    alignItems: 'center'
                }]}>
                            <View style={[styles.containerTemp, {
                    flexDirection: "row",
                    alignItems: 'flex-start'
                }]}>
                                <Text style={styles.temperature}>
                                    {this.props.temperature}°C
                                </Text>
                                <View style={styles.minMax}>
                                    <Text>
                                        min ?
                                    </Text>
                                    <Text>
                                        max ?
                                    </Text>
                                </View>
                            </View>
                        </View>  
                    </View>
                </View>
                <View style={[styles.windAndHumidity, {
                    flexDirection: "row",
                    alignSelf: 'center'
                }]}>
                    <View style={ {
                    flexDirection: "row",
                    alignSelf: 'center'
                }}>
                        <View style={{
                        flexDirection: "row",
                        alignSelf: 'center',
                        paddingLeft: 10
                    }}>
                            <Image  style={{width: 30, height: 30}}  source= {require('../icons/wind_icon.png')} />
                            <Text style={{paddingLeft: 10}}>{this.props.wind_speed}km/h</Text>
                        </View>
                        <View style={{
                        flexDirection: "row",
                        alignSelf: 'center',
                        paddingLeft: 20
                    }}>
                            <Image  style={{width: 30, height: 30}}  source= {require('../icons/water_icon.png')} />
                            <Text>{this.props.humidity}%</Text>
                        </View>
                    </View>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: 'white',
       marginTop: 50,
       borderRadius: 10
    
    },
    weatherDescriptions: {
        color: 'darkslateblue',
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 20,
        /* flexWrap: 'wrap' */
    },
    temperature: {
        color: 'darkslateblue',
        fontWeight: 'bold',
        fontSize: 55,
        margin: 20,
    },
    minMax: {
        color: 'grey',
        marginTop: 30,
        fontSize: 17,
    },
    containerTemp: {
        marginBottom: 30
    },
    windAndHumidity: {
        backgroundColor: 'darkslateblue',
        color: 'white',
        fontSize: 15,
        width: 200,
        height: 50,
        borderRadius: 10,
        position: 'absolute',
        bottom: -25,
        alignSelf: 'center'
    }
  });

export default ForecastTitle;