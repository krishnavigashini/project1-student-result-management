const initialState = {
    message: '',
  };
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEND_MESSAGE':
        return {
          ...state,
          message: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default contactReducer;
  