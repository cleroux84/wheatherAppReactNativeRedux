let initialState = {
    forecast: {},
    loader: false,
    inputValue : '',
  }

const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'UPDATE_FORECAST':
          return {
            ...state,
            forecast: action.forecast,
            inputValue : '',
          };
      case 'UPDATE_LOADER':
          return {
            ...state,
            loader: action.status
          };
 /*      case 'CLEAR_INPUT':
      return {
        ...state,
        inputValue: action.inputValue
      }; */
      case 'UPDATE_INPUT':
        return {
          ...state,
          inputValue: action.inputValue
        };
      default :
          return state;
  }
};

export default forecastReducer;