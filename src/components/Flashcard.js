import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import alphabet from "./ui/Alphabet";

import Flippy, { FrontSide, BackSide } from "react-flippy";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    marginTop: "2em",
    marginBottom: "4em",
  },
  letters: {
    fontFamily: "Roboto",
    fontSize: "7.5rem",
    width: "2em",
    height: "2em",
    lineHeight: "220px",
    borderRadius: "50%",
    color: "#fff",
    textAlign: "center",
    background: "#58B19F",
  },

  body: {
    ...theme.typography.body1,
  },
  displayLinebreak: {
    whiteSpace: "pre-line",
    lineHeight: "20px",
    fontWeight: 300,
  },
  button: {
    marginBottom: "2em",
  },
}));

export default function Flashcard() {
  const classes = useStyles();
  const theme = useTheme();

  // sets current state at the first letter of the array
  const [currentLetter, setCurrentLetter] = useState(0);
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);

  const handleNextSelection = () => {
    console.log("you clicked the next button!");

    const nextLetter = currentLetter + 1;
    //
    if (nextLetter < alphabet.length) {
      console.log(nextLetter);
      setCurrentLetter(nextLetter);
    }
    // } else if (nextLetter > alphabet.length - 1) {
    //   setNextDisabled(true);
    // }
  };

  const handlePrevSelection = () => {
    const nextLetter = currentLetter - 1;
    if (nextLetter > -1) {
      console.log(nextLetter);
      setCurrentLetter(nextLetter);
    }

    console.log("you clicked the back button!");
  };

  return (
    <div>
      <Flippy
        flipOnHover={true}
        flipOnClick={false}
        isflipped={false}
        flipDirection="horizontal"
        style={{ cursor: "pointer", margin: 30, paddingTop: "20px" }}
      >
        <FrontSide>
          <Card>
            <CardContent>
              <div>
                <Grid container justify="center">
                  <Grid item>
                    <Typography
                      variant="h2"
                      align="center"
                      className={classes.letters}
                    >
                      {alphabet[currentLetter].letter}
                    </Typography>
                  </Grid>
                </Grid>
                <Typography
                  variant="h2"
                  align="center"
                  style={{ marginTop: "1.5em", marginBottom: "1em" }}
                >
                  {alphabet[currentLetter].word}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </FrontSide>
        {/* -- Backside of Flash Card -- */}
        <BackSide>
          <Card>
            <CardContent>
              <Typography variant="h6" align="center">
                Definition
                <br />
                {alphabet[currentLetter].definition}
              </Typography>
            </CardContent>
          </Card>
          <Card style={{ marginTop: "3em" }}>
            <CardContent>
              <Typography
                variant="body1"
                align="center"
                paragraph
                className={classes.displayLinebreak}
              >
                Example
                <br />
                {alphabet[currentLetter].example}
              </Typography>
            </CardContent>
          </Card>
        </BackSide>
      </Flippy>
      <Grid
        container
        justify="space-evenly"
        alignItems="center"
        className={classes.buttonContainer}
      >
        <Grid item className={classes.button}>
          <Button onClick={handlePrevSelection} disabled={prevDisabled}>
            <ArrowBackIosIcon fontSize="large" />
          </Button>
        </Grid>
        <Grid item className={classes.button}>
          <Button onClick={handleNextSelection} disabled={nextDisabled}>
            <ArrowForwardIosIcon fontSize="large" />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
