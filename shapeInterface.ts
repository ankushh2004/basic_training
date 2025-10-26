// Shape Interface
interface Shape {
  area(): number;
  perimeter(): number;
}

// Circle
class Circle implements Shape {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

// Rectangle
class Rectangle implements Shape {
  private length: number;
  private breadth: number;

  constructor(length: number, breadth: number) {
    this.length = length;
    this.breadth = breadth;
  }

  area(): number {
    return this.length * this.breadth;
  }

  perimeter(): number {
    return 2 * (this.length + this.breadth);
  }
}

// Sample cases
const circle: Shape = new Circle(7);
console.log("Area of Circle: ", circle.area());
console.log("Perimeter of Circle: ", circle.perimeter());

const rectangle: Shape = new Rectangle(4, 5);
console.log("Area of Rectangle: ", rectangle.area());
console.log("Perimeter of Rectangle: ", rectangle.perimeter());
