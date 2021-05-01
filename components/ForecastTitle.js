import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ForecastChosenCity from './ForecastChosenCity';
import moment from "moment"; 
import 'moment/locale/fr'

const ForecastTitle = ({title, date}) => 
         (
            <View style={[styles.container, {
                /* flexDirection: "column", */
              }]}>
                <ForecastChosenCity title = {title}/>
                <Text style={styles.date}>{moment(date).format('ddd Do MMM')}</Text> 
            </View>
        )

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent:'center',
        flex: 1,

        /* position: 'absolute' */
    },
   
    date: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: 'Montserrat'
    }
  });

export default ForecastTitle;