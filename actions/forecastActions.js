export const updateForecast = (forecast) => ({
      type: 'UPDATE_FORECAST',
      forecast: forecast,
  });
  
export const toggleLoader = (status) => ({
    type: 'UPDATE_LOADER',
    status: status
});

export const clearInput = () => ({
    type: 'CLEAR_INPUT',
    inputValue: ''
});

export const updateInput = (inputValue) => ({
    type: 'UPDATE_INPUT',
    inputValue: inputValue
})

export const fetchLocation = () => {
    return async dispatch => {
        const response = await fetch ('https://api.bigdatacloud.net/data/reverse-geocode-client?city&localityLanguage=fr');
        const location = await response.json();
        dispatch(fetchForecast(location.locality));
    }
}
  
export const fetchForecast = (city) => {
    return async dispatch => {
        dispatch(toggleLoader(true));
        const response = await fetch ('http://api.weatherstack.com/current?access_key=46469cff65186cad32f237adaa90e388&query='+ city);
        const forecast = await response.json();
        dispatch(toggleLoader(false));
        dispatch(updateForecast(forecast));
        dispatch(clearInput());
    }
};

  