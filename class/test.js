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

it ('should have 98 square left if we place a ship long 2 length', () => {
    const game = new Gameboard(10, 10)
    game.create()
    game.place([4,5], [4,7])

    let total = 0
    game.board.forEach(row => {
        row.forEach(square => {
            if (square === null) {
                total += 1
            }
        })
    })
    expect(total).toBe(97)
})


it ('should have number of ship = 1 if we destroy one of them', () => {
    const game = new Gameboard(10, 10)
    game.create()
    game.place([6,2], [8,2])
    game.place([2,4], [2,1])
    game.receiveAttack([6,2])
    game.receiveAttack([7,2])
    game.receiveAttack([8,2])
    game.receiveAttack([2,4])
    game.receiveAttack([2,3])
    game.receiveAttack([2,2])
    game.receiveAttack([2,1])
    expect(game.numberOfShip).toBe(0)
})

const Player = require("./player")

it ('should exist', () => {
    expect(Player).toBeDefined()
})

it('should switch turn', () => {
    const playerA = new Player('bill')
    const playerB = new Player()

    expect(playerB.name).toMatch('Bot')
})