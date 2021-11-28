const matUtil = require('./utils.js');
const matrix1 = [[1,2,3], [4,5,6]];
const matrix2 = [[3,4,5], [6,7,8]];

const matrix3 = [[1,2,3], [4,5,6], [7,8,9]];
const matrix4 = [[4,3,2], [5,6,7], [1,5,2]];

console.log(matUtil.matrixProduct(matrix1, matrix2));
console.log(matUtil.sumOfMatrices(matrix1, matrix2));
console.log(matUtil.sumOfEachRow(matrix1));
console.log(matUtil.matrixProduct(matrix3, matrix4));
console.log(matUtil.sumOfMatrices(matrix3, matrix4));
console.log(matUtil.sumOfEachRow(matrix3));
