let initialState = {
    forecast: {},
    loader: false
  /*   inputTextValue : '' */
  }

const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'UPDATE_FORECAST':
          return {
            ...state,
            forecast: action.forecast,
           /*  inputTextValue: state.inputTextValue */
          };
      case 'UPDATE_LOADER':
          return {
            ...state,
            loader: action.status
          };
      default :
          return state;
  }
};

export default forecastReducer;