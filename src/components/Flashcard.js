import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Grid from "@material-ui/core/Grid";

import Flippy, { FrontSide, BackSide } from "react-flippy";

const useStyles = makeStyles((theme) => ({
  letters: {
    fontFamily: "Comic+Neue",
    fontSize: "8.5rem",
    color: theme.palette.common.flaskBlack,
  },

  buttonContainer: {
    marginTop: "2em",
    marginBottom: "4em",
  },
  body: {
    fontFamily: "Comic+Neue",
    fontSize: "2rem",
  },
}));

var alphabet = [
  {
    id: 1,
    letter: "Aa",
    word: "Array",
    definition:
      "An array is a special variable, which can hold more than one value at a time.",
  },
  {
    id: 2,
    letter: "Bb",
    word: "Boolean",
    definition:
      "Boolean is used as a function to get the value of a variable, object, conditions, expressions, etc. in terms of true or false.",
  },
  {
    id: 3,
    letter: "Cc",
    word: "Conditionals",
    definition:
      "Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.",
    example:
      "There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code. “Else” statements: where if the same condition is false it specifies the execution for a block of code. “Else if” statements: this specifies a new test if the first condition is false.",
  },
];

export default function Flashcard() {
  const classes = useStyles();
  const theme = useTheme();
  const [currentLetter, setCurrentLetter] = useState(0);

  const handleNextSelection = () => {
    console.log("you clicked the next button!");

    const nextLetter = currentLetter + 1;
    if (nextLetter < alphabet.length) {
      setCurrentLetter(nextLetter);
    }
  };

  const handlePrevSelection = () => {
    console.log("you clicked the back button!");

    const nextLetter = currentLetter - 1;
    if (nextLetter === alphabet[0].letter) {
      setCurrentLetter(null);
    } else if (nextLetter <= alphabet.length) {
      setCurrentLetter(nextLetter);
    }
  };

  return (
    <div>
      <Flippy
        flipOnHover={false}
        flipOnClick={true}
        isflipped={false}
        flipDirection="horizontal"
      >
        <FrontSide>
          <Card>
            <CardContent>
              <div>
                <Typography
                  variant="h1"
                  align="center"
                  className={classes.letters}
                >
                  {alphabet[currentLetter].letter}
                </Typography>
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
        <BackSide isflipped={true}>
          <Card>
            <CardContent>
              <Typography
                variant="body1"
                align="center"
                className={classes.body}
              >
                {alphabet[currentLetter].definition}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="subtitle1" align="center">
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
        <Grid item>
          <Button onClick={handlePrevSelection}>
            <ArrowBackIosIcon fontSize="large" />
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={handleNextSelection}>
            <ArrowForwardIosIcon fontSize="large" />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
