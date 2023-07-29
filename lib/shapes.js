class Circle {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `\n\t<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
  }
}

class Triangle {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `\n\t<polygon points="100,60 200,160 0,160" fill="${this.color}" />`;
  }
}

class Square {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `\n\t<rect width="300" height="200" fill="${this.color}" />`;
  }
}

module.exports = { 
  Circle,
  Triangle,
  Square
};