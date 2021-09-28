const initialState = {
  loading: true,
  allSpaces: [],
  details: null || {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "spaces/startLoading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "spaces/spacesFetched": {
      return {
        loading: false,
        allSpaces: [...state.allSpaces, ...action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
