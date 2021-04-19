import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from "moment"; 
import 'moment/locale/fr'

const ForecastTitle = ({title, date}) => 
         (
            <View style={[styles.container, {
                flexDirection: "column"
              }]}>
                <Text style={styles.nameCity}>{title}</Text>
                <Text style={styles.date}>{moment(date).format('ddd Do MMM')}</Text> 
               <Text></Text>
            </View>
        )

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent:'center',
        /* position: 'absolute' */
    },
    nameCity: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
    },
    date: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    }
  });

export default ForecastTitle;