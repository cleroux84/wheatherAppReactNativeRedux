export const updateForecast = (forecast) => ({
      type: 'UPDATE_FORECAST',
      forecast: forecast,
  });
  
export const toggleLoader = (status) => ({
    type: 'UPDATE_LOADER',
    status: status
});
  
export const fetchForecast = (city) => {
    return async dispatch => {
        dispatch(toggleLoader(true));
        const response = await fetch ('http://api.weatherstack.com/current?access_key=b997323375dea708cef7536fdd7cf549&query='+ city);
        const forecast = await response.json();
        dispatch(toggleLoader(false));
       /* console.log(forecast) */
        dispatch(updateForecast(forecast));
    }
};

  