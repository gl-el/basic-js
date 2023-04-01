const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const field = matrix.map(item => item.map(el => el = 0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        let prevI, prevJ, nextI, nextJ;
        (i === 0) ? prevI = 0 : prevI = i - 1;
        (i === matrix.length - 1) ? nextI = matrix.length - 1 : nextI = i + 1;
        (j === 0) ? prevJ = 0 : prevJ = j - 1;
        (j === matrix[i].length - 1) ? nextJ = matrix[i].length - 1 : nextJ = j + 1;
        for (let tempI = prevI; tempI <= nextI; tempI++){
          for (let tempJ = prevJ; tempJ <= nextJ; tempJ++){
            if (tempI !== i || tempJ !== j) field[tempI][tempJ]++;
          }
        }
      }
    }
  }
  return field;
}

module.exports = {
  minesweeper
};
