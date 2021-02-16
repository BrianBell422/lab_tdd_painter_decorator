const assert = require('assert')
const Paint = require('../paint.js')

describe('Paint', function () {

    let paint1;

    beforeEach(function () {
        paint1 = new Paint(20)
    })

    it('should have a number of litres', function () {
        const actual = paint1.litres;
        assert.strictEqual(actual, 20)
    })

    it('should be empty', function () {
        paint = new Paint(0)
        const actual = paint.checkPaintLevel();
        assert.strictEqual(actual, true)
    })

    it('should be able to empty', function () {
        paint.emptyPaint()
        const actual = paint.checkPaintLevel();
        assert.strictEqual(actual, true)
    })

})