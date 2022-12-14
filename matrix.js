// Реализуйте и экспортируйте функции rotateLeft() и rotateRight(), которые поворачивают матрицу влево (против часовой стрелки) и соответственно вправо (по часовой стрелке).

const rotateLeft = (matrix) => {
    const rotated = [];
    for (let i = 0, height = matrix.length, width = matrix[0].length; i < width; i++) {
        const row = [];
        for (let j = 0; j < height; j++) {
            row.push(matrix[j][width - 1 - i]);
        }
        rotated.push(row);
    }
    return rotated;
}

const rotateRight = (matrix) => {
    const rotated = [];
    for (let i = 0, height = matrix.length, width = matrix[0].length; i < width; i++) {
        const row = [];
        for (let j = 0; j < height; j++) {
            row.push(matrix[height - 1 - j][i]);
        }
        rotated.push(row);
    }
    return rotated;
}

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 1, 2],
];

rotateLeft(matrix);
// [
//   [4, 8, 2],
//   [3, 7, 1],
//   [2, 6, 0],
//   [1, 5, 9],
// ]

rotateRight(matrix);
// [
//   [9, 5, 1],
//   [0, 6, 2],
//   [1, 7, 3],
//   [2, 8, 4],
// ]