//import shape classes

const shapes = require("./shapes.js");

describe("Shapes", () => {
  // A test is created to check that the Circle class stores its color and text, check that render() correctly formats for SVG
  describe("Circle", () => {
    it("should store the correct color", () => {
      const color = "Red";
      const circle = new shapes.Circle(color, "ABC");
      expect(circle.color).toEqual("Red");
    });
    it("should return the correct SVG formatted string", () => {
      const color = "Red";
      const text = "ABC";
      const circle = new shapes.Circle(color, text);
      expect(circle.render())
        .toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="300" width="200">
      <circle cx="100" cy="150" r="80" fill="Red" />
      <text text-anchor="middle" x="100" y="150" font-size="60" fill="black">ABC</text>
      </svg>`);
    });
  });
  // A test is created to check that the Triangle class stores its color and text, check that render() correctly formats for SVG
  describe("Triangle", () => {
    it("should store the correct color", () => {
      const color = "Red";
      const triangle = new shapes.Triangle(color, "ABC");
      expect(triangle.color).toEqual("Red");
    });
    it("should return the correct SVG formatted string", () => {
      const color = "Red";
      const text = "ABC";
      const triangle = new shapes.Triangle(color, text);

      expect(triangle.render()).toEqual(
        `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="300" width="200"><polygon points="0, 300 100, 0 200, 300" fill="Red" /><text text-anchor="middle" x="100" y="150" font-size="60" fill="black">ABC</text></svg>`
      );
    });
  });
  // A test is created to check that the Square class stores its color and text, check that render() correctly formats for SVG
  describe("Triangle", () => {
    it("should store the correct color", () => {
      const color = "Red";
      const square = new shapes.Square(color, "ABC");
      expect(square.color).toEqual("Red");
    });
    it("should return the correct SVG formatted string", () => {
      const color = "Red";
      const text = "ABC";
      const square = new shapes.Square(color, text);

      expect(square.render()).toEqual(
        `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="300" width="200"><rect x="25" y="75" height="150" width="150" fill="Red" /><text text-anchor="middle" x="100" y="150" font-size="60" fill="black">ABC</text></svg>`
      );
    });
  });
});
