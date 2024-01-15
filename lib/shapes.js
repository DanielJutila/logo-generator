class Trianlge {
  constructor(text, textColor, shapeColor, shape) {
    this.shape = shape;
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

class Circle {
  constructor(text, textColor, shapeColor, shape) {
    this.shape = shape;
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

class Square {
  constructor(text, textColor, shapeColor, shape) {
    this.shape = shape;
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}


function generateShape(data) {
  return `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>`
}
export default generateShape;