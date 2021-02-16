const assert = require('assert')
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');

describe('Decorator', function () {

    let decorator;

    beforeEach(function () {
        decorator = new Decorator()
        paint1 = new Paint(20)
        room1 = new Room(10)
    })

    it('should start with empty paint stock', function () {
        const actual = decorator.paintInStock();
        assert.strictEqual(actual, 0)
    })

    it('should be able to add paint to stock', function () {
        const actual = decorator.addPaintToStock(paint1);
        assert.strictEqual(actual, 1)
    })


    it('should calculate total litres in stock', function () {
        decorator.addPaintToStock(paint1);
        const actual = decorator.calculateLitresInStock();
        assert.strictEqual(actual, 20);
    })

    it('enough to paint room', function () {
        decorator.addPaintToStock(paint1);
        const actual = decorator.enoughPaint(room1);
        assert.strictEqual(actual, true)
    })

    it('can room be painted', function () {
        decorator.addPaintToStock(paint1);
        decorator.enoughPaint(room1);
        const actual = room1.painted
        assert.strictEqual(actual, true)
    })
})