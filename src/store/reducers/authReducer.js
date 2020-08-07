const initState = { authError: null };
const authReducer = (state = initState, action) => {
  if (action.type === "LOGIN_SUCCESS") {
    console.log("LOGIN_SUCCESSFULLLLL");
    return {
      ...state,
      authError: null,
    };
  } else if (action.type === "LOGIN_ERROR") {
    console.log("LOGIN_ERRORRRRRRRR");
    return {
      ...state,
      authError: action.err,
    };
  } else if (action.type === "SIGNOUT_SUCCESS") {
    console.log(' "SIGNOUT_SUCCESS"');
    return state;
  } else if (action.type === "SIGNOUT_ERROR") {
    console.log(' "SIGNOUT_ERROR"');
    return state;
  } else if (action.type === "SIGNUP_SUCCESS") {
    console.log(' "SIGNUP_SUCCESS"');
    return {
      ...state,
      authError: null,
    };
  } else if (action.type === "SIGNUP_FAIL") {
    console.log("SIGNUP_FAIL");
    return {
      ...state,
      authError: action.err,
    };
  } else return state;
};

export default authReducer;
