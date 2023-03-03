const initialState = {
    isOpen: false
  };
  
  const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
      case "toggle":
        return {
          ...state,
          isOpen: !state.isOpen
        };
      case "close":
        return {
          ...state,
          isOpen: false
        };
      case "open":
        return {
          ...state,
          isOpen: true
        };
  
      default:
        return state;
    }
  };
  
  export default sidebarReducer;
  