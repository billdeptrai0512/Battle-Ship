class Ship {
    constructor(length) {
        this.length = length
        this.getHit = 0
        this.sunk = false 
    }

    hit() {
        this.getHit += 1

        if (this.getHit === this.length) {
            return this.isSunk()
        }
    }

    isSunk() {
        if (this.getHit === this.length ) {
            return this.sunk = true
        }
    }

}

module.exports = Ship