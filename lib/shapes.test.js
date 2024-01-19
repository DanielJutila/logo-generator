const { Square, Circle, Triangle } = require('./shapes.js');

describe("Square test", () => {
  test("test for a triangle with a red background, black text, tea letter", () => {
    const squObj = new Square('red', 'black', 'tea');
    expect(squObj.shape());
  });
});
describe("Circle test", () => {
  test("test for a triangle with a red background, black text, tea letter", () => {
    const squObj = new Circle('red', 'black', 'tea');
    expect(squObj.shape());
  });
});
describe("Triangle test", () => {
  test("test for a triangle with a red background, black text, tea letter", () => {
    const squObj = new Triangle('red', 'black', 'tea');
    expect(squObj.shape());
  });
});