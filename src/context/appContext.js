import { useEffect, createContext, useContext, useReducer } from "react";
import Keycloak from "keycloak-js";

import reducers from "../context/reducers";
import {
  SETTING_PROFILE_KEYCLOAK,
  DISPLAY_ALERT,
  DISPLAY_ALERT2,
  CLEAR_ALERT,
} from "../context/actions";

const initialState = {
  userLoading: true,
  isLoading: false,
  showAlert: false,
  showAlert2: false,
  alertText: "",
  alertType: "",
  profile: null,
  isAuthenticated: false,
  randomNumber: Math.floor(Math.random() * 99) + 1,
};

const keycloakConfig = {
  url: "https://auth.grouplease.co.th/auth/",
  realm: "Procurement-System",
  clientId: "react-frontend",
};

const keycloakInitOptions = {
  onLoad: "login-required",
  redirectUri: window.location.origin,
  // responseMode: "query",
  // checkLoginIframe: false,
};

const keycloak = new Keycloak(keycloakConfig);
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  useEffect(() => {
    return () => {
      initializeKeycloak();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function initializeKeycloak() {
    // console.log("initialize Keycloak");
    try {
      const isAuthenticatedResponse = await keycloak.init(keycloakInitOptions);

      if (!isAuthenticatedResponse) {
        console.log("user is not yet authenticated. forwarding user to login.");
        keycloak.login();
      }
      //console.log("user already authenticated");

      const profile = await keycloak.loadUserProfile();

      let indexFirst = profile.attributes.manager[0].indexOf("=");
      let indexLast = profile.attributes.manager[0].indexOf(",");
      let manager = profile.attributes.manager[0].substring(
        indexFirst + 1,
        indexLast
      );

      const currentProfile = {
        id: profile.username,
        firstName: profile.firstName,
        lastName: profile.lastName,
        fullName: `${profile.firstName} ${profile.lastName}`,
        company: profile.attributes.company[0],
        position: profile.attributes.title[0],
        department: profile.attributes.department[0],
        email: profile.email,
        manager: manager,
        avatar: profile.firstName.substring(0, 1),
      };
      console.log(profile);
      console.log(currentProfile);
      settingProfile({
        profile: currentProfile,
        isAuthenticated: isAuthenticatedResponse,
      });
    } catch {
      console.log("error initializing Keycloak");
      settingProfile({
        profile: null,
        isAuthenticated: false,
      });
    }
  }

  const settingProfile = ({ profile, isAuthenticated }) => {
    dispatch({
      type: SETTING_PROFILE_KEYCLOAK,
      payload: {
        profile: profile,
        isAuthenticated: isAuthenticated,
      },
    });
  };

  const displayAlert = ({ alertType, alertText }) => {
    //console.log("displayAlert1");
    dispatch({ type: DISPLAY_ALERT, payload: { alertType, alertText } });
    clearAlert();
  };

  const displayAlert2 = ({ alertType, alertText }) => {
    //console.log("displayAlert2");
    dispatch({ type: DISPLAY_ALERT2, payload: { alertType, alertText } });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const logoutUser = async () => {
    keycloak.logout();
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        displayAlert2,
        logoutUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState };
