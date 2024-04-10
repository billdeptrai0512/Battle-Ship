const Ship = require('./ship')

it('should exist', () => {
    expect(Ship).toBeDefined()
})

it('should increate get hit', () => {
    const ship = new Ship(5)
    ship.hit()
    ship.hit()
    expect(ship.getHit).toBe(2)
})

const Gameboard = require('./gameboard')

it ('should exist', () => {
    expect(Gameboard).toBeDefined()
})

it ('should have 100 square', () => {
    const game = new Gameboard(10, 10)
    game.create()
    let total = 0
    game.board.forEach(row => {
        row.forEach(square => {
            total += 1
        })
    })
    expect(total).toBe(100)
})

it ('should have 99 square left if we place a ship', () => {
    const game = new Gameboard(10, 10)
    game.create()
    game.place([3,5])
    let total = 0
    game.board.forEach(row => {
        row.forEach(square => {
            if (square === null) {
                total += 1
            }
        })
    })
    expect(total).toBe(99)
})

it ('should have 98 square left if we place a ship and receive 1 attack', () => {
    const game = new Gameboard(10, 10)
    game.create()
    game.place([3,5])
    game.receiveAttack([5,8])
    let total = 0
    game.board.forEach(row => {
        row.forEach(square => {
            if (square === null) {
                total += 1
            }
        })
    })
    expect(total).toBe(98)
})


it ('should increase getHit if received attack ', () => {
    const game = new Gameboard(10, 10)
    game.create()
    game.place([3,5])
    game.receiveAttack([3,5])
    expect(game.board[3][5].getHit).toBe(1)
})


