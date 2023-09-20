// class Shape {
//     constructor(size, color) {
//         this.size = size;
//         this.color = color;
//     }
// };




class Circle {
    constructor(size, color) {
        this.size = size;
        this.color = color;
    }
    render() {
        Circle.size = '<circle cx="25" cy="75" r="20"/>'
    }
};

class Square {
    constructor(size, color) {
        this.size = size;
        this.color = color;
    }
    render() {
        Square.size = '<rect x="10" y="10" width="30" height="30"/>'
    }
}

class Triangle {
    constructor(size, color) {
        this.size = size;
        this.color = color;
    }
    render() {
        Triangle.size = ''
    }
}