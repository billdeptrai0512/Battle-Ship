const Gameboard = require('./class/gameboard.js')

console.log(Gameboard)

const board = document.querySelectorAll('.board')

function displayBoard() {
    let table = `<table>`
    for (let i = 0 ; i < 10 ; i++) {
        table += `<tr>`
        for (let j = 0; j <10; j++) {
            table += `<td></td>`
        }
        table += `</tr>`
    }
    table += `</table>`

    board.forEach(item => {
        item.innerHTML = table
    })

    return 
}

function placeShip(array = [], length = Number, row = Boolean) {

    const cell = document.querySelector(`#human tr:nth-child(${array[0]}) td:nth-child(${array[1]})`)

    const content = document.createElement('div')
    content.classList.add('content')

    const ship = document.createElement('div')
    ship.classList.add('ship')

    //determine weither the ship is width or height 
    if (row === true) {
        ship.style.width = `${3 * length}em`
    } else {
        ship.style.height = `${3 * length}em`
    }

    content.appendChild(ship)

    return cell.appendChild(content)
}


const startGame = (() => {

    displayBoard()

    placeShip([5,5], 3, true)

    placeShip([4,4], 2, false)

    console.log('hello')


})()



//write function to place ship 


// placeShip([5,6])
// placeShip([6,5])


//select random 10 array with requirement
//placeship on those array

// 1 - 4 length
// 2 - 3 length
// 3 - 2 length
// 4 - 1 length

// select randomly child follow requirement - total : 20 length
// Each ship must seperate each other 1 block
// add class/id to change the border color 
