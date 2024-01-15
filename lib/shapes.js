class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}
class Triangle extends Shape{
  shape(){
    return `  <polygon points="50 15, 100 100, 0 100" style="fill:${this.shapeColor};" />`
  }
}

class Circle extends Shape{
  shape(){
    return `<circle cx="25" cy="75" r="20" fill="${this.shapeColor}" stroke-width="5"/>`
  }
}

class Square extends Shape{
  shape(){
    return `<rect x="10" y="10" width="100" height="100" fill="${this.shapeColor}" stroke-width="5"/>`
  }

}
export {Square, Circle, Triangle};
