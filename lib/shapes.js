//triangle, circle, and square classes

class Triangle {
  constructor(color, text) {
    this.color = color;
    this.text = text;
  }

  render() {
    const svgString = `<svg height="300" width="200">
    <text x="25" y="150" fill="black">${this.text}</text>
    <polygon points="150, 18 244, 182 56, 182" fill=${this.color} />
    </svg>`;
    return svgString;
  }
}

module.exports = {
  Triangle,
};
