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
    return `\n\t<polygon points="150,20 250,160 50,160" fill="${this.color}" />`;
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