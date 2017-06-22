var calculateBestMove =function(game) {
    //generate all the moves for a given position
    var newGameMoves = game.moves();
    var bestMove = null;
    var bestValue = -9999;

    // for (var i = 0; i < newGameMoves.length; i++) {
    //     var newGameMove = newGameMoves[i];
    //     game.move(newGameMove);
    //
    //     //take the negative as AI plays as black
    //     var boardValue = -evaluateBoard(game.board())
    //     game.undo();
    //     if (boardValue > bestValue) {
    //         bestValue = boardValue;
    //         bestMove = newGameMove
    //     }
    // }

    game.move(newGameMoves[Math.floor(Math.random() * newGameMoves.length)]);
    board.position(game.fen());
};
