import { createMuiTheme } from "@material-ui/core/styles";

const flashBlack = "#232b2b";
const flashGrey = "#3b444b";

export default createMuiTheme({
  palette: {
    common: {
      flashBlack: `${flashBlack}`,
      flashGrey: `${flashGrey}`,
    },
    primary: {
      main: `${flashBlack}`,
    },
  },
  typography: {
    h2: {
      fontFamily: "Caveat+Brush",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: flashGrey,
      lineHeight: "1.5",
    },
    body1: {
      fontFamily: "Oswald",
      fontWeight: 300,
      fontSize: "1.25rem",
      color: flashBlack,
    },
  },
});
