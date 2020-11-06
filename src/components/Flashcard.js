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
    fontFamily: "Roboto",
    fontSize: "2rem",
  },
}));

var alphabet = [
  {
    id: 1,
    letter: "Aa",
    word: "Array",
    definition:
      "An array is a special variable, which can hold more than one value at a time. \n \n var fruit = ['Banana', 'Apple', 'Pear']",
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
    word: "Concatenation",
    definition:
      "Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.",
    example:
      "There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code. “Else” statements: where if the same condition is false it specifies the execution for a block of code. “Else if” statements: this specifies a new test if the first condition is false.",
  },
  {
    id: 4,
    letter: "Dd",
    word: "Data types",
    definition:
      "Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.",
    example: "test",
  },
  {
    id: 5,
    letter: "Ee",
    word: "Equality",
    definition:
      "Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.",
    example:
      "There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code. “Else” statements: where if the same condition is false it specifies the execution for a block of code. “Else if” statements: this specifies a new test if the first condition is false.",
  },
  {
    id: 6,
    letter: "Ff",
    word: "Functions",
    definition:
      "Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.",
    example:
      "There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code. “Else” statements: where if the same condition is false it specifies the execution for a block of code. “Else if” statements: this specifies a new test if the first condition is false.",
  },
  {
    id: 7,
    letter: "Gg",
    word: "Global Scope vs. Local Scope",
    definition:
      "Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.",
    example:
      "There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code. “Else” statements: where if the same condition is false it specifies the execution for a block of code. “Else if” statements: this specifies a new test if the first condition is false.",
  },
  {
    id: 8,
    letter: "Hh",
    word: "Hoisting",
    definition:
      "FUNCTION HOISTING \n The two ways of declaring functions produce different results. Declaring a function one way “hoists” it to the top of the call, and makes it available before it’s actually defined.",
    example:
      "There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code. “Else” statements: where if the same condition is false it specifies the execution for a block of code. “Else if” statements: this specifies a new test if the first condition is false.",
  },
  {
    id: 9,
    letter: "Ii",
    word: "If-Else Statements",
    definition:
      "Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.",
    example:
      "There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code. “Else” statements: where if the same condition is false it specifies the execution for a block of code. “Else if” statements: this specifies a new test if the first condition is false.",
  },
  {
    id: 10,
    letter: "Jj",
    word: "Javascript",
    definition:
      "JavaScript (or 'JS') is a programming language used most often for dynamic client-side scripts on webpages, but it is also often used on the server-side, using a runtime such as Node.js.",
    example:
      "There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code. “Else” statements: where if the same condition is false it specifies the execution for a block of code. “Else if” statements: this specifies a new test if the first condition is false.",
  },
  {
    id: 11,
    letter: "Kk",
    word: "Keys",
    definition:
      "Object.keys() returns an array whose elements are strings corresponding to the enumerable properties found directly upon object. The ordering of the properties is the same as that given by looping over the properties of the object manually.",
    example:
      "There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code. “Else” statements: where if the same condition is false it specifies the execution for a block of code. “Else if” statements: this specifies a new test if the first condition is false.",
  },
  {
    id: 12,
    letter: "Ll",
    word: "Loops",
    definition:
      "Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.",
    example:
      "There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code. “Else” statements: where if the same condition is false it specifies the execution for a block of code. “Else if” statements: this specifies a new test if the first condition is false.",
  },
  {
    id: 13,
    letter: "Mm",
    word: "Map Function",
    definition:
      "Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.",
    example:
      "There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code. “Else” statements: where if the same condition is false it specifies the execution for a block of code. “Else if” statements: this specifies a new test if the first condition is false.",
  },
  {
    id: 14,
    letter: "Nn",
    word: "Numbers",
    definition:
      "Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.",
    example:
      "There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code. “Else” statements: where if the same condition is false it specifies the execution for a block of code. “Else if” statements: this specifies a new test if the first condition is false.",
  },
  {
    id: 15,
    letter: "Oo",
    word: "Objects",
    definition:
      "Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.",
    example:
      "There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code. “Else” statements: where if the same condition is false it specifies the execution for a block of code. “Else if” statements: this specifies a new test if the first condition is false.",
  },
  {
    id: 16,
    letter: "Pp",
    word: "Pop-Up boxes",
    definition:
      "Displays an alert dialog with the specified message and an OK button. The alert dialog should be used for messages which do not require any response on the part of the user, other than the acknowledgment of the message.",
    example: "alert('Hello World')",
  },
  {
    id: 17,
    letter: "Qq",
    word: "Query Selector",
    definition:
      "Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.",
    example:
      "There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code. “Else” statements: where if the same condition is false it specifies the execution for a block of code. “Else if” statements: this specifies a new test if the first condition is false.",
  },
  {
    id: 18,
    letter: "Rr",
    word: "Rest Parameter",
    definition:
      "Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.",
    example:
      "There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code. “Else” statements: where if the same condition is false it specifies the execution for a block of code. “Else if” statements: this specifies a new test if the first condition is false.",
  },
  {
    id: 19,
    letter: "Ss",
    word: "Strings",
    definition:
      "Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.",
    example:
      "There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code. “Else” statements: where if the same condition is false it specifies the execution for a block of code. “Else if” statements: this specifies a new test if the first condition is false.",
  },
  {
    id: 20,
    letter: "Tt",
    word: "Ternary Operator",
    definition:
      "Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.",
    example:
      "There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code. “Else” statements: where if the same condition is false it specifies the execution for a block of code. “Else if” statements: this specifies a new test if the first condition is false.",
  },
  {
    id: 21,
    letter: "Uu",
    word: "User Interface",
    definition:
      "User interface JavaScript (or UI script) is the functionality that you add to a transformed page. User interface (UI) JavaScript includes: click handlers. swiping functionality. AJAX calls.",
    example:
      "There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code. “Else” statements: where if the same condition is false it specifies the execution for a block of code. “Else if” statements: this specifies a new test if the first condition is false.",
  },
  {
    id: 22,
    letter: "Vv",
    word: "Variables",
    definition:
      "Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.",
    example:
      "var, const, let  var   The most common variable. Can be reassigned but only accessed within a function. Variables defined with var move to the top when code is executed. \n const \n Cannot be reassigned and not accessible before they appear within the code. \n let \n Similar to const, however, let variable can be reassigned but not re-declared.",
  },
  {
    id: 23,
    letter: "Ww",
    word: "Web APIs",
    definition:
      "An Application Program Interface (API) is a contract for data interaction. It lets applications ask specific questions, and provides answers when it has them. It also allows certain data to be submitted, which it can store for others to question.",
    example:
      "There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code. “Else” statements: where if the same condition is false it specifies the execution for a block of code. “Else if” statements: this specifies a new test if the first condition is false.",
  },
  {
    id: 24,
    letter: "Xx",
    word: "XHR",
    definition:
      "XMLHttpRequest is an API that provides client functionality for transferring data between a client and a server. It provides an easy way to retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just a part of the page without disrupting what the user is doing.",
    example:
      "There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code. “Else” statements: where if the same condition is false it specifies the execution for a block of code. “Else if” statements: this specifies a new test if the first condition is false.",
  },
  {
    id: 25,
    letter: "Yy",
    word: "Year & Time Methods",
    definition: "getDate() || getDay() || getFullYear() || getHours()",
    example:
      "There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code. “Else” statements: where if the same condition is false it specifies the execution for a block of code. “Else if” statements: this specifies a new test if the first condition is false.",
  },
  {
    id: 26,
    letter: "Zz",
    word: "Z-Index",
    definition:
      "The z-index CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.",
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
        style={{ cursor: "pointer" }}
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
              <Typography
                variant="body1"
                align="center"
                className={classes.body}
              >
                {alphabet[currentLetter].definition}
              </Typography>
            </CardContent>
          </Card>
          <Card style={{ marginTop: "3em" }}>
            <CardContent>
              <Typography variant="body" align="center">
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
