/// <reference path="knight.ts" />

class GameAI {
    // let the AI choose a move, and update both the
    // knight and the gamestate
    
    public static moveKnight(king:King, knights: Knight[], gameState:GameState) {

        let t0 = performance.now();
        const depth = 2;
        let minimumEval = +Infinity;
        let bestMove: [number, number] = [0,0];
        let indexKnight = 0;

        // Loop through the knights array
        for(let i = 0; i<knights.length; i++) {

            // for every knight, get the legal moves
            const KnightLegalMoves = knights[i].getMoves(gameState.knightPositions[i]);

            for(let move of KnightLegalMoves) {

                const gameStateCopy = gameState.copy();
                gameStateCopy.knightPositions[i] = move;

                // de miniMax-loop wordt aangeroepen
                const Eval = this.miniMax(gameStateCopy, king, knights, depth,-Infinity, +Infinity, true);

                if( Eval < minimumEval ) {

                    minimumEval = Eval;
                    bestMove = move;
                    indexKnight = i;
                    // console.log( minimumEval);
                }

            }

        }

        knights[indexKnight].setPosition(bestMove);                                                                
        gameState.knightPositions[indexKnight] = bestMove;    
        
        let t1 = performance.now();
        console.log("AI move took " + (t1 - t0) + " milliseconds.");

    }

    public static miniMax(gameState: GameState, king: King, knights: Knight[], depth: number, alpha: number, beta: number, maximizingPlayer: boolean): number {
        
        const score = gameState.getScore();

        if( depth === 0 || score[1] ) {

            return score[0]
        }
        
        if( maximizingPlayer ) { // is true
            
            // King move
            let maximumEval = -Infinity;
            const gameStateCopy = gameState.copy();
            const KingLegalMoves = king.getMoves(gameStateCopy.kingPos)
            let moves: number[] = [0];


            for( let move of KingLegalMoves ) {

                gameStateCopy.kingPos = move; 

                // Else gets called in the miniMax function, by setting maximizingPlayer to false
                const currentEval = this.miniMax(gameStateCopy, king, knights, depth -1, alpha, beta, false);
                maximumEval = Math.max(maximumEval, currentEval);
                alpha = Math.max( alpha, maximumEval );
                // moves.push(maximumEval);
                // console.log("maximumEval = " + maximumEval);
                if ( beta <= alpha ) {
                    // console.log(alpha);
                    break;

                } 

            };

            // console.log(moves);
            let bestMove = Math.max(...moves);
            // console.log(bestMove);
            return bestMove;

        } else { // is false

            // Knights move
            let minimumEval = Infinity;
            let moves: number[] = [0];

            // console.log(depth);

            for(let i = 0; i < knights.length; i++) {
            
                const gameStateCopy = gameState.copy();
                const KnightLegalMoves = knights[i].getMoves(gameStateCopy.knightPositions[i]);

                for(let move of KnightLegalMoves) {

                    gameStateCopy.knightPositions[i] = move;
    
                    // If gets called in the miniMax function, by setting maximizingPLayer to true
                    const currentEval = this.miniMax(gameStateCopy, king, knights, depth -1, alpha, beta, true);
                    minimumEval = Math.min(minimumEval, currentEval);
                    beta = Math.min ( beta, minimumEval);
                    // moves.push(minimumEval);
                    // console.log("minEval = " + minimumEval);

                    if ( beta <=  alpha) {

                        // console.log("ik ben kleiner of gelijk aan alpha");
                        break;
                        
                    }
    
                }

            };

            // console.log(moves);
            let bestMove = Math.min(...moves);
            // console.log(bestMove);
            if (bestMove !== 0 ) {
                // console.log(bestMove);
            };
            return bestMove;

        }

    }

}