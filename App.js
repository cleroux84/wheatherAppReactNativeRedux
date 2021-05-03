import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Forecast from './components/Forecast';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';


export default function App() {
  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-Black.ttf')
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Forecast />
    </Provider>
  );
}