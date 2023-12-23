//triangle, circle, and square classes with method to return SVG formatted string

class Triangle {
  constructor(color, text) {
    this.color = color;
    this.text = text;
  }

  render() {
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="300" width="200">
    <polygon points="0, 300 100, 0 200, 300" fill="${this.color}" />
    <text text-anchor="middle" x="100" y="150" font-size="60" fill="black">${this.text}</text>
    </svg>`;
    return svgString;
  }
}

class Circle {
  constructor(color, text) {
    this.color = color;
    this.text = text;
  }

  render() {
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="300" width="200">
      <circle cx="100" cy="150" r="80" fill="${this.color}" />
      <text text-anchor="middle" x="100" y="150" font-size="60" fill="black">${this.text}</text>
      </svg>`;
    return svgString;
  }
}

class Square {
  constructor(color, text) {
    this.color = color;
    this.text = text;
  }

  render() {
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="300" width="200">
        <rect x="25" y="75" height="150" width="150" fill="${this.color}" />
        <text text-anchor="middle" x="100" y="150" font-size="60" fill="black">${this.text}</text>
        </svg>`;
    return svgString;
  }
}

module.exports = {
  Triangle,
  Circle,
  Square,
};
