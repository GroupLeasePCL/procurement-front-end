import {
  SETTING_PROFILE_KEYCLOAK,
  DISPLAY_ALERT,
  DISPLAY_ALERT2,
  CLEAR_ALERT,
} from "./actions";

// import { initialState } from "./appContext";

const reducers = (state, action) => {
  if (action.type === SETTING_PROFILE_KEYCLOAK) {
    return {
      ...state,
      profile: action.payload.profile,
      isAuthenticated: action.payload.profile,
    };
  }

  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: action.payload.alertType,
      alertText: action.payload.alertText,
    };
  }
  if (action.type === DISPLAY_ALERT2) {
    return {
      ...state,
      showAlert2: true,
      alertType: action.payload.alertType,
      alertText: action.payload.alertText,
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      showAlert2: false,
      alertType: "",
      alertText: "",
    };
  }

  throw new Error(`no such action : ${action.type}`);
};

export default reducers;
