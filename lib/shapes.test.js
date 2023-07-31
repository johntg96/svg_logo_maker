const { Circle, Triangle, Square } = require('./shapes');

describe('Shape Classes', () => {
  describe('Circle', () => {
    test('renders a circle with the correct color', () => {
      const color = 'red';
      const circle = new Circle(color);
      const expectedSvg = `\n\t<circle cx="150" cy="100" r="100" fill="${color}" />`;
      expect(circle.render()).toBe(expectedSvg);
    });
  });

  describe('Triangle', () => {
    test('renders a triangle with the correct color', () => {
      const color = 'blue';
      const triangle = new Triangle(color);
      const expectedSvg = `\n\t<polygon points="100,60 200,160 0,160" fill="${color}" />`;
      expect(triangle.render()).toBe(expectedSvg);
    });
  });

  describe('Square', () => {
    test('renders a square with the correct color', () => {
      const color = 'green';
      const square = new Square(color);
      const expectedSvg = `\n\t<rect width="300" height="200" fill="${color}" />`;
      expect(square.render()).toBe(expectedSvg);
    });
  });
});