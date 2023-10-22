class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    shapeColor(color) {
        this.color = (color);
    }
};

class Circle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor)
    }
    display() {
        return `<svg height= "100" width= "100"> 
<circle cx="25" cy="75" r="20" width="300" height="200" fill="${this.color}" />
<text x="13" y="81" fill="${this.textColor}">${this.text}</text>
</svg>`
    }
};

class Square extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor)
    }
    display() {
        return `<svg height= "100" width= "100> 
        <rect x="25" y="25"  width="300" height="300" fill="${this.color}"/>
        <text x= "13" y= "81 fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
};


class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor)
    }
    display() {
        return `<svg  height= "100" width= "100"> <polygon points="0,200,300,200,150,0" width="300" height="200" fill="${this.color}"/>
        <text x= "13" y= "81 fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
};

module.exports = {Circle, Square, Triangle};