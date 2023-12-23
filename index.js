//file should take user input and return an SVG file with their logo

const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes.js");

//inquirer for user input

//3 characters
//text color, keyword or hex - can color be passed as a variable equal to its name/string?
//shape: circle, triangle, or square - need classes
//fs to write file to 'logo.svg'
//300x200 px image

const questions = [
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
    .then((response) =>
      writeToFile(
        "./examples/logo.svg",
        generateShape(response.color, response.shape, response.text)
      )
    );
}

//checks which shape class to use, returns the SVG string to render
function generateShape(color, shape, text) {
  if (shape === "Triangle") {
    const generatedShape = new shapes.Triangle(color, text);
    return generatedShape.render();
  } else if (shape === "Circle") {
    const generatedShape = new shapes.Circle(color, text);
    return generatedShape.render();
  } else if (shape === "Square") {
    const generatedShape = new shapes.Square(color, text);
    return generatedShape.render();
  }
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("logo.svg generated")
  );
}

//import js file for shape classes
//jest for unit tests
//video submission

function init() {
  userPrompt(questions);
}

init();
