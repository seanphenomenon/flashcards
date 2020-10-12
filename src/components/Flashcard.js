import React from "react";
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
}));

export default function Flashcard() {
  const classes = useStyles();
  const theme = useTheme();

  const handleNextClick = () => {
    console.log("you clicked the next button!");
  };

  const handleBackClick = () => {
    console.log("you clicked the back button!");
  };

  return (
    <Flippy flipOnHover={false} flipOnClick={true} flipDirection="horizontal">
      <FrontSide>
        <Card>
          <CardContent>
            <Typography variant="h1" align="center" className={classes.letters}>
              Aa
            </Typography>
            <Typography
              variant="h2"
              align="center"
              style={{ marginTop: "1.5em", marginBottom: "1em" }}
            >
              Array
            </Typography>
            <CardActions>
              <Grid
                container
                justify="space-evenly"
                alignItems="center"
                className={classes.buttonContainer}
              >
                <Grid item>
                  <Button onClick={handleBackClick}>
                    <ArrowBackIosIcon fontSize="large" />
                  </Button>
                </Grid>
                <Grid item>
                  <Button onClick={handleNextClick}>
                    <ArrowForwardIosIcon fontSize="large" />
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </CardContent>
        </Card>
      </FrontSide>
    </Flippy>
  );
}
