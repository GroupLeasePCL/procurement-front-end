export const getTheme = () => {
  if (window !== "undefined") {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    } else {
      return "";
    }
  }
};
