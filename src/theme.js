import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { getTheme } from "./service/service";
import { blue, common, green } from "@mui/material/colors";
// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
        popupBackgroundColor: {
          100: "#1a1625",
          200: "#2f2b3a",
          300: "#46424f",
          400: "#5e5a66",
          500: "#76737e",
          600: "#908d96",
        },
        image: blue,
        text: {
          900: "#0f2922",
          800: "#1e5245",
          700: "#2e7c67",
          600: "#3da58a",
          500: "#4cceac",
          400: "#70d8bd",
          300: "#94e2cd",
          200: "#b7ebde",
          100: "#dbf5ee",
        },
        textMenu: { 500: "#6870fa", 900: "#141414", 1000: common.white },
        dateBtn: {
          text: common.black,
          backgroundColor: "#4cceac",
          hoverColor: "#2e7c67",
        },
        closeBtn: {
          backgroundColor: "#f8d7da",
          color: "#842029",
          hoverColor: "#ffa08f !important",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0", // manually changed
          500: "#141b2d",
          600: "#1F2A40",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
        popupBackgroundColor: {
          100: "#f4fafd",
          200: "#f5fbfd",
          300: "#f6fbfd",
          400: "#f8fcfe",
          500: "#f8fcfe",
          600: "#fafdfe",
        },
        image: green,
        text: {
          100: "#bef8fd",
          200: "#87eaf2",
          300: "#54d1db",
          400: "#38bec9",
          500: "#2cb1bc",
          600: "#14919b",
          700: "#0e7c86",
          800: "#0a6c74",
          900: "#044e54",
        },
        textMenu: { 500: common.black, 900: "#858585", 1000: common.black },
        dateBtn: {
          text: common.black,
          backgroundColor: "#4cceac",
          hoverColor: "#2e7c67",
        },
        closeBtn: {
          backgroundColor: "#f8d7da",
          color: "#842029",
          hoverColor: "#ffa08f !important",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
              light: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            third: {
              main: colors.blueAccent[300],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            button: {
              dark: colors.blueAccent[800],
              main: colors.blueAccent[500],
              light: colors.blueAccent[100],
            },
            popup: {
              main: colors.popupBackgroundColor[400],
            },

            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            third: {
              main: colors.blueAccent[300],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            button: {
              dark: colors.grey[800],
              main: colors.grey[700],
              light: colors.grey[100],
            },

            background: {
              default: "#F7F7F9", // #fcfcfc,#f4fafd ,F7F6F6
            },
          }),
    },
    typography: {
      fontFamily: ["DM Sans", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["DM Sans", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["DM Sans", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["DM Sans", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["DM Sans", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["DM Sans", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["DM Sans", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(getTheme() ? getTheme() : "light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        let changeTheme = getTheme() === "light" ? "dark" : "light";
        setMode(changeTheme);

        localStorage.setItem("theme", changeTheme);
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};

export const customColors = {
  warning: {
    light: "#fff3c9",
    dark: "#F57F17",
  },

  error: {
    light: "#f8d7da",
    dark: "#842029",
  },
  success: {
    light: "#d1e7dd",
    dark: "#0f5132",
  },
};
