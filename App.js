import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Forecast from './components/Forecast';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';


export default function App() {
  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-Black.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
    {/*   <View style={styles.container}>
        <Text style={{ fontFamily: 'Montserrat', fontSize: 30, color: 'white' }}> */}
            <Forecast />
      {/*   </Text>
        <StatusBar style="auto" />

      </View> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    /* backgroundColor: '#343a40' , */
   /*  color: '#fff', */
/*     alignItems: 'center',
    justifyContent: 'center', */
  },
});
