const { Circle } = require('./shapes')

test('can create a circle object', () => {
    let testCircle = new Circle('blue', 'MNC', 'white')
    expect(typeof (testCircle)).toEqual('object')
})

test('can create an svg', () => {
    let testCircle = new Circle('blue', 'MNC', 'white')
    expect(testCircle.display()).toEqual(`<svg height= "100" width= "100"> 
<circle cx="50" cy="50" r="100" width="300" height="200" fill="blue" />
<text x="50" y="50" fill="white">MNC</text>
</svg>`)
})