class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator{
 

  static calculate (geometric) {
    if(geometric instanceof Square) {
      console.log(geometric.side * geometric.side)
   } else if(geometric instanceof Rectangle) {
      console.log(geometric.width * geometric.height)
   } else if(geometric instanceof Circle) {
      console.log(geometric.radius * 3.14)}

    }
  }

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));