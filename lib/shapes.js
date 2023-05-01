class Shape {
    constructor(text, textColor) {
      this.textColor = textColor;
      this.text = text;
    }
    setColor(shapeColor) {
      this.shapeColor = shapeColor;
    }
    renderText() {
      const textX = 50 - (this.text.length *5) / 2;
      return `<text x="${textX}" y="110" fill="${this.textColor}">${this.text}</text>`;
    }
    renderShape() {
      return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.shapeColor}" />`;
    }
    render() {
      return `<svg height="100" width="100">
        ${this.renderShape()}
        ${this.renderText()}
      </svg>`;
    }
  }
  

class Square extends Shape {
    constructor(text,textColor){
    
        super(text,textColor)
    }
    renderShape() {
        return `<rect width="300" height="100" fill="${this.shapeColor}">`
    }
    
}

class Circle extends Shape {
    constructor(text,textColor){
        super(text,textColor)
    }
    renderShape(){
        return  `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.shapeColor}" />`
    }
}

class Triangle extends Shape {
    constructor(text,textColor){
        super(text,textColor)
    }
    renderShape(){
        return `<polygon points="200,10 250,190 160,210" fill="${this.shapeColor}" />`
    }
}

module.exports = {Square, Circle, Triangle}
