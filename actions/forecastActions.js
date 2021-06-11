//met à jour le state forecast avec l'objet de l'api
export const updateForecast = (forecast) => ({
      type: 'UPDATE_FORECAST',
      forecast: forecast,
  });

//gestion du statut du loader
export const toggleLoader = (status) => ({
    type: 'UPDATE_LOADER',
    status: status
});

//remet l'input à vide
export const clearInput = () => ({
    type: 'CLEAR_INPUT',
    inputValue: ''
});

//recupere la valeur de l'input pour lancer une nouvelle recherche
export const updateInput = (inputValue) => ({
    type: 'UPDATE_INPUT',
    inputValue: inputValue
})

//appel à l'api de geolocalisation pour lancer l'appli
export const fetchLocation = () => {
    return async dispatch => {
        const response = await fetch ('https://api.bigdatacloud.net/data/reverse-geocode-client?city&localityLanguage=fr');
        const location = await response.json();
//appel à l'api de meteo avec la ville recupérée en paramètre
        dispatch(fetchForecast(location.locality));
    }
}
  
//appel à l'api de meteo en envoyant la ville 
export const fetchForecast = (city) => {
    return async dispatch => {
//lance le loader pendant l'appel à l'ap
        dispatch(toggleLoader(true));
        const response = await fetch ('http://api.weatherstack.com/current?access_key=b997323375dea708cef7536fdd7cf549&query='+ city);
        const forecast = await response.json();
//arrête le loader
        dispatch(toggleLoader(false));
//met à jour le state forecast avec l'objet reçu de l'api
        dispatch(updateForecast(forecast));
//remet l'input à vide 
        dispatch(clearInput());
    }
}

  