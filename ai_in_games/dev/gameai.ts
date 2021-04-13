/// <reference path="knight.ts" />

class GameAI {
    // let the AI choose a move, and update both the
    // knight and the gamestate
    
    public static moveKnight(king:King, knights: Knight[], gameState:GameState) {

        let t0 = performance.now();

        // function miniMax(gameState: GameState, depth: number, maximizingPlayer: boolean): number {
        function miniMax(gameState: GameState, depth: number, alpha: number, beta: number, maximizingPlayer: boolean): number {
            
            const score = gameState.getScore();

            if( depth === 0 || score[1] ) {

                return score[0]

            }
            
            if( maximizingPlayer ) { // is true
                
                // King move
                let maximumEval = -Infinity;
                const kingLegalMoves = king.getMoves(gameState.kingPos);
                const gameStateCopy = gameState.copy();
                
                for ( const move of kingLegalMoves ) {
                    
                    gameStateCopy.kingPos = move;

                    // Else gets called in the miniMax function, by setting maximizingPlayer to false

                    // const currentEval = miniMax(gameStateCopy, depth -1, false);
                    const currentEval = miniMax(gameStateCopy, depth -1, alpha, beta, false);
                    maximumEval = Math.max(maximumEval, currentEval);
                    
                    // Add alpha beta pruning
                    alpha = Math.max( alpha, currentEval );

                    if ( beta <= alpha ) {

                        break;

                    }

                };

                return maximumEval;

            } else { // is false

                // Knights move
                let minimumEval = Infinity;

                knights.forEach((knight, i) => {
                    
                    const knightLegalMoves = knight.getMoves(gameState.knightPositions[i]);
                    const gameStateCopy = gameState.copy();

                    for ( const move of knightLegalMoves ) {

                        gameStateCopy.knightPositions[i] = move;

                        // If gets called in the miniMax function, by setting maximizingPLayer to true

                        // const currentEval = miniMax(gameStateCopy, depth - 1, true);
                        const currentEval = miniMax(gameStateCopy, depth - 1, alpha, beta, true);
                        minimumEval = Math.min(minimumEval, currentEval);
                        
                        // Add alpha beta pruning
                        beta = Math.min ( beta, currentEval);

                        if ( beta <= alpha ) {

                            break;
        
                        }
                        
                    };

                } );

                return minimumEval;

            };
            
            
        };

        const depth = 8;
        let minimumEval = +Infinity;
        let bestMove: [number, number] = [0,0];
        let indexKnight = 0;
        
        // Loop through the knights array
        knights.forEach( (knight, i) => {

            // For every knight, get the legal moves
            const moves = knight.getMoves(gameState.knightPositions[i]);
            const gameStateCopy = gameState.copy();

            moves.forEach((move) => {
                gameStateCopy.knightPositions[i] = move;

                // First call for miniMax function, starts recursive loop.
                // const currentEval = miniMax(gameStateCopy, depth -1, true);
                const currentEval = miniMax(gameStateCopy, depth -1, -Infinity, Infinity, true);
                if (currentEval < minimumEval) {
                    minimumEval = currentEval;
                    bestMove = move;
                    indexKnight = i;
                }   

            } );

        } );

        knights[indexKnight].setPosition(bestMove);
        gameState.knightPositions[indexKnight] = bestMove; 

        let t1 = performance.now();
        // console.log("de code is geupdate!");
        console.log("AI move took " + (t1 - t0) + " milliseconds.");

    }

};