import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { Button, Text, View, Image, TextInput, StyleSheet } from 'react-native';
import {fetchForecast, updateInput} from '../actions/forecastActions';
import ForecastTitle from './ForecastTitle';
import ForecastResult from './ForecastResult';
import ForecastForm from './ForecastForm';

class Forecast extends Component {
   render(){
     
        return (
            (this.props.forecast && Object.keys(this.props.forecast).length === 0)?
                <View>
                    <Button onPress={() => this.props.fetchForecast("lyon")} title="test" ></Button>                  
                </View> : 
                <View>
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
                        {!this.props.loader ? 
                            <ForecastForm 
                                onSubmitEditing={(event) => this.props.fetchForecast(event.nativeEvent.text)}
                                onChangeText= {(text) => {this.props.updateInput(text)}}
                                value={this.props.inputValue} />  
                            : <h1>It is loading</h1>}
                     
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
        updateInput

    }, dispatch)
}

  export default connect(mapStateToProps, mapDispatchToProps)(Forecast)