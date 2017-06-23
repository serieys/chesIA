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
            bestMove = newGameMove;
        }
    }

    game.move(bestMove);
    board.position(game.fen());
};

var evaluateBoard = function(game) {
  var boardValue = 0;
  for (var x = 1; x <= 8; x++) {
    for (var y = 1; y <= 8; y++) {
      if (game.get((toLetters(x)+y).toLowerCase()) !== null) {
        var chessPiece = game.get((toLetters(x)+y).toLowerCase());
        boardValue += getChessPieceValue(chessPiece.type,chessPiece.color);
      }

    }
  }
return boardValue;
}

var getChessPieceValue = function(type, color) {
  var chessPieceValue = 0;
  switch (type) {
    case "p":
      chessPieceValue = 10;
      break;
    case "n":
      chessPieceValue = 30;
      break;
    case "b":
      chessPieceValue = 30;
      break;
    case "r":
      chessPieceValue = 50;
      break;
    case "q":
      chessPieceValue = 90;
      break;
    case "k":
      chessPieceValue = 900;
      break;
    default:
  }
  if (color === "b") {
    chessPieceValue *=-1;
  }
  return chessPieceValue;
}


function toLetters(num) {
    "use strict";
    var mod = num % 26,
        pow = num / 26 | 0,
        out = mod ? String.fromCharCode(64 + mod) : (--pow, 'Z');
    return pow ? toLetters(pow) + out : out;
}
