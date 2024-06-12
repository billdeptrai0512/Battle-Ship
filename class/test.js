/**
 * @jest-environment jsdom
 */

const Ship = require('./ship')
// npm run testq
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

it('should exist', () => {
    expect(Gameboard).toBeDefined()
})

it('should have 100 square', () => {
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


it('should display on screen - left board', () => {
    
    const game = new Gameboard(10, 10)

    game.create()

    game.place([5,5], 2, true)
    
    let total = 0

    game.board.forEach(row => {
        row.forEach(square => {
            if (square === null) {
                total += 1
            }
        })
    })

    let numberOfShip = game.numberOfShip

    expect(numberOfShip).toBe(1)
})









// it('should have number of ship = 1 if we destroy one of them', () => {
//     const game = new Gameboard(10, 10)
//     game.create()
//     game.place([6,2], 2 , true)
//     game.place([2,4], 3 , false)
//     game.receiveAttack([2,4])
//     game.receiveAttack([3,4])
//     game.receiveAttack([4,4])
//     expect(game.numberOfShip).toBe(1)
// })

// it('should have number of ship = 1 if we place the ship on x', () => {
//     const game = new Gameboard(10, 10)
//     game.create()
//     game.place([6,2], 2 , true)
//     game.place([5,4], 3 , false)

//     expect(game.numberOfShip).toBe(1)
// })

// const Player = require("./player")

// it('should exist', () => {
//     expect(Player).toBeDefined()
// })

// it('should switch turn', () => {
//     const playerA = new Player('bill')
//     const playerB = new Player()

//     expect(playerB.name).toMatch('Bot')
// })
