import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Text, View, ImageBackground } from 'react-native';
import { fetchForecast, updateInput, fetchLocation } from '../actions/forecastActions';
import ForecastTitle from './ForecastTitle';
import ForecastResult from './ForecastResult';
import ForecastForm from './ForecastForm';

class Forecast extends Component {
    componentDidMount() {
        this.props.fetchLocation()
    }
    render(){
        return (
            //si une adresse est trouvée affichage du rendu de l'api
            (this.props.forecast.location)
            ? <View >
                <ImageBackground source={require('../assets/images/background.jpg')} resizeMode='cover' style={{width: '100%', height: '100%'}}>
                    <ForecastTitle 
                        title={this.props.forecast.location.name} 
                        date={this.props.forecast.location.localtime}
                    />
                    <ForecastResult 
                        weather_icon={this.props.forecast.current.weather_icons[0]}
                        weather_descriptions={this.props.forecast.current.weather_descriptions[0]}
                        temperature={this.props.forecast.current.temperature}
                        wind_speed={this.props.forecast.current.wind_speed}
                        humidity= {this.props.forecast.current.humidity}
                        />
                        {!this.props.loader  
                            ? <ForecastForm 
                                onSubmitEditing={(event) => this.props.fetchForecast(event.nativeEvent.text)}
                                onChangeText= {(text) => {this.props.updateInput(text)}}
                                value={this.props.inputValue} 
                            />  
                            : <Text>It is loading</Text>}
                </ImageBackground>
            </View>
            //si aucune adresse n'est trouvée, affichage d'une barre de recherche
            : <View>
                <ImageBackground source={require('../assets/images/background.jpg')} style={{width: '100%', height: '100%'}}>
                    <Text>Aucune ville trouvée, réessayer : </Text>
                    {!this.props.loader  
                            ? <ForecastForm 
                                onSubmitEditing={(event) => this.props.fetchForecast(event.nativeEvent.text)}
                                onChangeText= {(text) => {this.props.updateInput(text)}}
                                value={this.props.inputValue} />  
                            : <Text>It is loading</Text>}
                </ImageBackground>
            </View>
                
        )
    }
}

const mapStateToProps = (state) => {
    return {
       forecast: state.forecast,
       inputValue : state.inputValue
    }
  }

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchForecast,
        updateInput,
        fetchLocation
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);