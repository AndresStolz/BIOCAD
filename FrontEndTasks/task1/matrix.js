var matrixExample = [
  [ 1, 2, 3, 4 ],
  [ 4, 5, 6, 5 ],
  [ 7, 8, 9, 7 ],
  [ 7, 8, 9, 7 ]
  ];

  function sumUpDiagonals(matrix) {
    let mainD = 0, subD = 0;
    const size = matrix.length;

    for(let i = 0; i < size; i++) {

      mainD += matrix[i][i];
      subD +=matrix[i][size-i-1];
    }

    return [mainD, subD];
  };

  console.log(sumUpDiagonals(matrixExample));
