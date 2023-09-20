class Shape {
    constructor() {
        this.color = ''
    }
    shapeColor(color) {
        this.color = (color);
    }
};

class Circle extends Shape {
    display() {
        return `<circle cx="50" cy="50" r="100" width="300" height="200" fill="${this.color}"/>`
    }
};

class Square extends Shape {
    display() {
        return `<rect x="50" y="50"  width="300" height="200" fill="${this.color}"/>`
    }
};


class Triangle extends Shape {
    display() {
        return `<polygon points="0,200,300,200,150,0" width="300" height="200" fill="${this.color}"/>`
    }
};

module.exports = {Circle, Square, Triangle};