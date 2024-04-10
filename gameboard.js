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

    place(array = []) {
        return this.board[array[0]][array[1]] = new Ship(1)
    }

    receiveAttack(array = []) {

        let missed = []

        if (this.board[array[0]][array[1]] === null) {
            missed.push(array)
            return this.board[array[0]][array[1]] = 'x'
        }

        if (typeof(this.board[array[0]][array[1]]) === 'object') {
            const ship = this.board[array[0]][array[1]]
            ship.hit()
            return 
        }

    }

}

const game = new Gameboard(10,10)

module.exports = Gameboard