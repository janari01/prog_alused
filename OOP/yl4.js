class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }

    print() {
        return `Circle, r: ${this.radius}, color: ${this.getColor()}`;
    }
}

class Square extends Shape {
    constructor(color, side) {
        super(color);
        this.side = side;
    }

    getArea() {
        return this.side ** 2;
    }

    print() {
        return `Square, a: ${this.side}, color: ${this.getColor()};`
    }
}

class Rectangle extends Shape {
    constructor(color, length, width) {
        super(color);
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length + this.width;
    }

    print() {
        return `Rectangle, l: ${this.length}, w: ${this.width}, color: ${this.getColor()}`;
    }
}

class Paint {
    constructor() {
        this.shapes = [];
    }

    addShape(shape) {
        this.shapes.push(shape);
    }

    getShape() {
        return this.shapes;
    }

    calculateTotalArea() {
        return this.shapes.reduce((total, a) => total + a.getArea(), 0);
    }

    getCircles() {
        return this.shapes.filter(shape => shape instanceof Circle);
    }

    getSquares() {
        return this.shapes.filter(shape => shape instanceof Square);
    }

    getRectangles() {
        return this.shapes.filter(shape => shape instanceof Rectangle);
    }
}

const paint = new Paint();


const circle = new Circle('red', 5);
const square = new Square('blue', 4);
const rectangle = new Rectangle('green', 6, 3);

paint.addShape(circle);
paint.addShape(square);
paint.addShape(rectangle);

console.log(paint.calculateTotalArea())



