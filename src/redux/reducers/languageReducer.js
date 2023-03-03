const initialState = {
  lang: "english",
};

const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ENG":
      return {
        ...state,
        lang: "english",
      };
    case "HINDI":
      return {
        ...state,
        lang: "hindi",
      };

    default:
      return state;
  }
};

export default langReducer;
