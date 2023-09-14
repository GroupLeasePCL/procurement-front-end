import Keycloak from "keycloak-js";
const keycloakConfig = {
  url: "https://auth.grouplease.co.th/auth/",
  realm: "Procurement-System",
  clientId: "account",
};

const configKeycloak = new Keycloak(keycloakConfig);
export default configKeycloak;
