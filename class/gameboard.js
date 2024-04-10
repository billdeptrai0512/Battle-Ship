const Ship = require('./ship')

class Gameboard {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.board = []
        this.numberOfShip = 0
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

    place(array1 = [], array2 = []) {
        
        let length
        //[4,7] vs [4,4]
        if (array1[0] === array2[0]) {

            if (array1[1] > array2[1]) {
                length = (array1[1] - array2[1]) + 1
                let ship = new Ship(length)
                this.numberOfShip += 1
                for (let i = array2[1]; i <= array1[1]; i++) {
                    this.board[array1[0]][i] = ship
                }
            } else {
                length = (array2[1] - array1[1]) + 1
                let ship = new Ship(length)
                this.numberOfShip += 1
                for (let i = array1[1]; i <= array2[1]; i++) {
                    this.board[array1[0]][i] = ship
                }
            }
        }
        //[3,2] vs [8,2]    
        if (array1[1] === array2[1]) {

            if (array1[0] > array2[0]) {
                length = (array1[0] - array2[0]) + 1
                let ship = new Ship(length)
                this.numberOfShip += 1
                for (let i = array2[0]; i <= array1[0]; i++) {
                    this.board[i][array1[1]] = ship
                }
            } else {
                length = (array2[0] - array1[0]) + 1
                let ship = new Ship(length)
                this.numberOfShip += 1
                for (let i = array1[0]; i <= array2[0]; i++) {
                    this.board[i][array1[1]] = ship
                }
            }
        }

        return 
    }

    receiveAttack(array = []) {

        if (this.board[array[0]][array[1]] === null) {
            //record
            return this.board[array[0]][array[1]] = 'x'
        }

        if (typeof(this.board[array[0]][array[1]]) === 'object') {
            const ship = this.board[array[0]][array[1]]
            ship.hit()

            if (ship.sunk === true) {
                this.numberOfShip -= 1
            }

            if (this.numberOfShip === 0) {
                return "This game is over"
            }

            return 
        }

    }

}

module.exports = Gameboard