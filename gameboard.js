const Ship = require('./ship')

class Gameboard {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.board = []
    }

    create() {
        for (let i = 0 ; i < 10 ; i++) {
            this.board[i] = []
            for (let j = 0 ; j < 10 ; j++) {
                this.board[i][j] = null //row, column
            }
        }
        return this.board
    }

    place([x,y]) {

    }

}


module.exports = Gameboard