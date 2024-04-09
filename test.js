const Ship = require('./ship')

it('should exist', () => {
    expect(Ship).toBeDefined()
})

it('should get hit', () => {
    const ship = new Ship(5)
    ship.hit()
    ship.hit()
    ship.hit()
    ship.hit()
    ship.hit()
    expect(ship.sunk).toBeTruthy()
})

const Gameboard = require('./gameboard')

it ('should exist', () => {
    expect(Gameboard).toBeDefined()
})

it ('should have 200 square', () => {
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