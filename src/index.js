
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (arguments.length === 0) {
    return [];
  } else {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        let columnId = i % 2 === 0
        ? j
        : (matrix[i].length - j - 1);
  
        result.push(matrix[i][columnId])
      }
    }
    return result;
  }
}