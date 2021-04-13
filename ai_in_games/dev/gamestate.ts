class GameState {
    public kingPos: [number, number];               // position of the king in the game in board coordinates
    public knightPositions: [number, number][];     // position of the knights in the game in board coordinates
    public currentKingPos: [number, number];
    public score: [number, boolean] = [0, false];

    constructor(kingPos: [number, number], knightPositions: [number, number][]) {
        this.kingPos = kingPos;
        this.knightPositions = knightPositions;
        this.currentKingPos = kingPos;
    }

    // return the value of the state and if the state is terminal (game over)
    // higher value is better gamestate for the king (100 is win, -100 is lose)
    public getScore() : [number, boolean] {

        let row: number;
        let currentKingRow: number;

        // game over
        for (let z of this.knightPositions) {
            if (Board.samePosition(z, this.kingPos)) {
                this.score = [-100, true];
            }
        }

        // win
        if (this.kingPos[1] == 0) {
            this.score = [100, true];
        } 

        // not over yet, return an evaluation of the gamestate
        // higher number is better for king, lower better for the knights

        row = this.kingPos[1];
        currentKingRow = this.currentKingPos[1];

        // if row is lager dan huidige row -> -10 
        // if row is gelijk aan huidige row -> 0
        // if row is hoger dan huidige row -> +10;

        if (row >= currentKingRow) {

            this.score[0] -= 10;

        } else if (row === currentKingRow ) {

            this.score[0] += 0;

        } else if (row <= currentKingRow) {

            this.score[0] += 10;
            
        } 

        // Hint: use the position of the king stored in this.kingPos
        return this.score;
    }

    // create a copy of the gamestate (needed by AI to look into the future)
    public copy() : GameState {
        const knightPosCopy  = Object.assign([], this.knightPositions);

        return new GameState(this.kingPos, knightPosCopy)
    }
}