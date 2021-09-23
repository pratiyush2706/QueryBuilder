import { createMuiTheme } from "@material-ui/core/styles";

const fontFamily = ["IBM Plex Sans", "sans-serif"].join(",");

const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
  [defaultTheme.breakpoints.down("sm")]: {
    spacing: 8,
  },
  [defaultTheme.breakpoints.up("md")]: {
    spacing: 10,
  },
  palette: {
    background: {
      paper: "#79E2F2",
      default: "#fff",
    },
    primary: {
      main: "#7545b0",
    },
    secondary: {
      main: "#fff",
    },
    action: {
      disabledBackground: "rgb(186,162,216)",
      disabled: "#ffffff",
    },
  },
  typography: {
    fontFamily: fontFamily,
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#fff",
      },
      elevation4: {
        boxShadow: "none",
        borderBottom: "1px solid #e5e5e5",
      },
    },
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiTab: {
      root: {
        padding: 0,
        paddingLeft: 10,
        paddingRight: 10,
        textTransform: "none",
      },
    },
    MuiButton: {
      label: {
        textTransform: "none",
      },
      contained: {
        backgroundColor: "#4F46E5",
        borderRadius: "4px",
        color: "#fff",
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      },
      outlined: {
        borderRadius: 4,
        color: "#fff",
      },
    },
    MuiSelect: {
      filled: {
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid #404348",
        borderRadius: "4px",
        color: "#fff",
      },
      select: {
        color: "#fff",
      }
    },
    MuiFilledInput: {
      root: {
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid #404348",
        borderRadius: "4px",
      }
    },
    MuiInputBase: {
      root: {
      },
      input: {
        color: "#fff",
      }
    },
    MuiInputLabel: {
      root: {
        color: "#fff",
      },
      animated: {
        transition: "color 200ms cubic-bezier(255,255,255,1) 0ms,transform 200ms cubic-bezier(255,255,255,1) 0ms"
      },
    },
    MuiTypography: {
      h1: {
        fontFamily: "IBM Plex Sans",
        fontSize: "38px",
        "@media (max-width:600px)": {
          fontSize: "32px",
        },
        fontWeight: "bold",
        lineHeight: 1.21,
        color: "#141c3a",
      },
      h2: {
        fontFamily: "IBM Plex Sans",
        fontSize: "32px",
        "@media (max-width:600px)": {
          fontSize: "26px",
        },
        fontWeight: "bold",
        lineHeight: 1.25,
        color: "#141c3a",
      },
      h3: {
        fontFamily: "IBM Plex Sans",
        fontSize: "26px",
        "@media (max-width:600px)": {
          fontSize: "20px",
        },
        fontWeight: "bold",
        lineHeight: 1.27,
        color: "#141c3a",
      },
      h4: {
        fontFamily: "IBM Plex Sans",
        fontSize: "20px",
        "@media (max-width:600px)": {
          fontSize: "18px",
        },
        fontWeight: 500,
        lineHeight: 1.35,
        color: "#141c3a",
      },
      h5: {
        fontFamily: "IBM Plex Sans",
        fontSize: "17px",
        "@media (max-width:600px)": {
          fontSize: "14px",
        },
        fontWeight: 500,
        lineHeight: 1.41,
        color: "#fff",
      },
      subtitle1: {
        fontFamily: "IBM Plex Sans",
        fontSize: "22px",
        "@media (max-width:600px)": {
          fontSize: "16px",
        },
        fontWeight: "normal",
        lineHeight: 1.36,
        color: "#5a6075",
      },
      body1: {
        fontFamily: "IBM Plex Sans",
        fontSize: "20px",
        "@media (max-width:600px)": {
          fontSize: "17px",
        },
        fontWeight: "normal",
        lineHeight: 1.35,
        color: "#5a6075",
      },
      body2: {
        fontFamily: "IBM Plex Sans",
        fontSize: "17px",
        "@media (max-width:600px)": {
          fontSize: "16px",
        },
        fontWeight: "normal",
        lineHeight: 1.41,
        color: "#5a6075",
      },
      caption: {
        fontFamily: "IBM Plex Sans",
        fontSize: "14px",
        fontWeight: "normal",
        lineHeight: 1.43,
        color: "#5a6075",
      },
    },
    MuiSvgIcon: {
      root: {
        cursor: "pointer",
      },
    },
  },
});

export { theme };
