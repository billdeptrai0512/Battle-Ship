export default class Player {
    constructor(name) {
        this.name = name || "Bot"
        this.turn = false
    }

    switchTurn() {
        this.turn = true ? false : true
    }

}