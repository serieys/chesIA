var calculateBestMove =function(game) {
    //generate all the moves for a given position
    var newGameMoves = game.moves();
    var bestMove = null;
    var bestValue = -9999;

    for (var i = 0; i < newGameMoves.length; i++) {
        var newGameMove = newGameMoves[i];
        game.move(newGameMove);

        //take the negative as AI plays as black
        var boardValue = -evaluateBoard(game);
        game.undo();
        if (boardValue > bestValue) {
            bestValue = boardValue;
            bestMove = newGameMove
        }
    }

    game.move(newGameMoves[Math.floor(Math.random() * newGameMoves.length)]);
    board.position(game.fen());
};

var evaluateBoard = function(game) {
  for (var x = 1; x <= 8; x++) {
    for (var y = 1; y <= 8; y++) {
      game.get((toLetters(x)+y).toLowerCase());
    }
  }

}


function toLetters(num) {
    "use strict";
    var mod = num % 26,
        pow = num / 26 | 0,
        out = mod ? String.fromCharCode(64 + mod) : (--pow, 'Z');
    return pow ? toLetters(pow) + out : out;
}
