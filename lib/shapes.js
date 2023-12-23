//triangle, circle, and square classes

class Triangle {
  constructor(color, text) {
    this.color = color;
    this.text = text;
  }

  render() {
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="300" width="200">
    <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
    <text text-anchor="middle" x="150" y="150" font-size="60" fill="black">${this.text}</text>
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
      <circle cx="150" cy="100" r="80" fill="${this.color}" />
      <text text-anchor="middle" x="150" y="150" font-size="60" fill="black">${this.text}</text>
      </svg>`;
    return svgString;
  }
}

module.exports = {
  Triangle,
  Circle,
};
