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

    place(array = [], length = Number, row = Boolean) {

        if (this.board[array[0]][array[1]] !== null) {
            return
        }

        let ship = new Ship(length)

        this.numberOfShip += 1
        
        if (row === true) {
            for (let i = array[1]; i < array[1] + length; i++) {
                this.board[array[0]][i] = ship
            }
        } 

        if (row === false) {
            for (let i = array[0]; i < array[0] + length; i++) {
                this.board[i][array[1]] = ship
            }
        }

        //funnction return list of array around the ship

        return this.addSpace()
    }

    addSpace() {

        let result = []

        for (let i = 0 ; i < 10 ; i++) {
            for (let j = 0 ; j < 10 ; j++) {
                if (this.board[i][j] !== null && this.board[i][j] !== 'x') {
                    result.push([i,j])
                }
            }
        }

        const option = [
            [0,1], [1,0], [0,-1], [-1,0],
            [1,1], [1,-1], [-1,1], [-1, -1]
        ]

        result.forEach(array => {
            for (let i = 0 ; i < option.length ; i++) {
                let newArray = [array[0] + option[i][0], array[1] + option[i][1]]
        
                if ((newArray[0] > -1 && newArray[0] < 11) && (newArray[1] > -1 && newArray[1] < 11)) {
                    if (this.board[newArray[0]][newArray[1]] === null) {
                        this.board[newArray[0]][newArray[1]] = 'x'
                    }
                    
                }
                
            }
        })

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