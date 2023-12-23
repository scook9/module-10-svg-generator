//file should take user input and return an SVG file with their logo

const inquirer = require("inquirer");
const fs = require("fs");

//inquirer for user input

//3 characters
//text color, keyword or hex
//shape: circle, triangle, or square
//fs to write file to 'logo.svg'
//300x200 px image

const qwuestions = [
  { type: "input", message: "Logo color?", name: "color" },
  {
    type: "list",
    message: "Logo shape?",
    choices: ["Circle", "Triangle", "Square"],
    name: "shape",
  },
  { type: "input", message: "Logo text? (3 letters)", name: "text" },
];

function userPrompt(questions) {
  // response is an object with keys equal to the names in the questions array
  inquirer
    .prompt(questions)
    .then((response) => writeToFile("README.md", markdown(response)));
}

function writeToFile(fileName, data) {}

//import js file for shape classes
//jest for unit tests
//video submission
