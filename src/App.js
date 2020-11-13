import React, { useState } from "react";
import FlashCard from "./components/Flashcard";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import theme from "./components/ui/Theme";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {/* Paper wrapper is needed for dark mode to take effect */}
      <Paper style={{ padding: "10px" }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              ></Switch>
            }
            label="dark theme"
          ></FormControlLabel>
        </FormGroup>
        <FlashCard />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
