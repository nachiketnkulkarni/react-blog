const intialState = {
  userToken: null,
  isLogin: false,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TOKEN":
      return { userToken: action.payload.token, isLogin: true };

    case "DELETE_TOKEN":
      return {
        userToken: null,
        isLogin: false,
      };

    default:
      return state;
  }
};

export default reducer;
