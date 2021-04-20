import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class ForecastTitle extends Component {
    render() {
        return (
            <View>
                <View style={[styles.container, {
                    flexDirection: "column",
                    flex: 1,
                    flexWrap: 'wrap',
                    alignItems: 'center'
                }]}>
                    <View style={[styles.container, {
                    flexDirection: "row",
                    alignItems: 'center'
                }]}>
                        <Image 
                            style={{width: 100, height: 100, borderRadius: 10, marginLeft: 30}} 
                            source={{uri: this.props.weather_icon}}
                        />
                        <Text style={styles.weatherDescriptions}>
                            {this.props.weather_descriptions}  
                        </Text>
                    </View>
                    <View>
                        <View style={[styles.container, {
                    flexDirection: "column",
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
                                        min {this.props.temperature + 4}°C
                                    </Text>
                                    <Text>
                                        max {this.props.temperature - 4}°C
                                    </Text>
                                </View>
                            </View>
                        </View>  
                    </View>
                </View>
                <View style={[styles.windAndHumidity, {
                    flexDirection: "row",
                    alignSelf: 'center',
                    flex: 1
                }]}>
                    <View style={ {
                    flexDirection: "row",
                    alignSelf: 'center',
                }}>
                        <View style={{
                        flexDirection: "row",
                        alignSelf: 'center',
                        paddingLeft: 10, 
                    }}>
                            <Image  style={{width: 40, height: 30}}  source= {require('../assets/images/wind_icon.png')} />
                            <Text style={{paddingLeft: 5, color:'white'}}>{this.props.wind_speed}km/h</Text>
                        </View>
                        <View style={{
                        flexDirection: "row",
                        alignSelf: 'center',
                        paddingLeft: 30
                    }}>
                            <Image  style={{width: 30, height: 30}}  source= {require('../assets/images/water_icon.png')} />
                            <Text style={{color:'white'}}>{this.props.humidity}%</Text>
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
       marginTop: 90,
       borderRadius: 10,
       margin: 15,
    },
    weatherDescriptions: {
        color: 'darkslateblue',
        fontWeight: 'bold',
        fontSize: 30,
        width: 200,
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