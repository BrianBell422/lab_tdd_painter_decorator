const Paint = require("./paint")
const Room = require("./room")

const Decorator = function(paintStock=null) {
    this.paintStock = []
}

Decorator.prototype.paintInStock = function () {
    return this.paintStock.length
}

Decorator.prototype.addPaintToStock = function (paint) {
    this.paintStock.push(paint)
    return this.paintStock.length
}

Decorator.prototype.calculateLitresInStock = function () {
    let totalLitres = this.paintInStock() * 20
    return totalLitres
}

Decorator.prototype.enoughPaint = function (room) {
    if (this.calculateLitresInStock() >= room.area) {
        return true, room.painted = true
    }
    else {
        return false
    }
}


module.exports = Decorator;