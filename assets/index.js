const fs = require('fs');
const { Triangle, Circle, Square } = require('../lib/shapes');
const userInput = require('../lib/UserInput');

// function to generate SVG logo
function generateLogo(text, textColor, shape, shapeColor) {
  let svgString;
  switch (shape) {
    case 'triangle':
      const triangle = new Triangle(text,textColor);
      triangle.setColor(shapeColor);
      svgString = triangle.render();
      break;
    case 'circle':
      const circle = new Circle(text,textColor);
      circle.setColor(shapeColor);
      svgString = circle.render();
      break;
    case 'square':
      const square = new Square();
      square.setColor(shapeColor);
      svgString = square.render();
      break;
  }
  // add text to the center of the SVG logo
  
  return svgString;
}

// use userInput to collect user input
userInput().then(answers => {
  // generate the SVG logo
  const svgString = generateLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor);
  // write the SVG logo to a file
  fs.writeFile('logo.svg', svgString, err => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
});
