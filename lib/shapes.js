

class Shape {
  constructor(shapeColor, textColor, text) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.text = text;
  }
}
class Triangle extends Shape{
  shape(){
    return `  <polygon points="100 30, 200 200, 0 200" style="fill:${this.shapeColor};" />
      <text x="100" y="150" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  }
}

class Circle extends Shape{
  shape(){
    return `<circle cx="100" cy="100" r="80" fill="${this.shapeColor}"/>
    <text x="100" y="100" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    `
  }
}

class Square extends Shape{
  shape(){
    return `<rect x="10" y="10" width="150" height="150" fill="${this.shapeColor}"/>
    <text x="85" y="90" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  }

}


module.exports = {
  Triangle,
  Circle,
  Square
}