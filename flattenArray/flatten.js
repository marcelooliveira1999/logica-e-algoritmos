// Este algoritmo recebe um array que pode conter elementos aninhados e retorna um novo array
// onde todos os elementos estão em uma única dimensão, preservando a ordem original.

function flatten(arr) {
  const flattenedArr = [];

  function recursiveFlattening(subArr) {
    for (const element of subArr) {
      if (Array.isArray(element)) {
        recursiveFlattening(element);
      } else {
        flattenedArr.push(element);
      }
    }
  }

  recursiveFlattening(arr);
  return flattenedArr;
}

const arr = [1, 2, [3, 4, [5, 6, 7], [8, 9, [10, 11, [12, 13, [14, 15]]]]]];
const flattenArr = flatten(arr);
const arr2 = [1, 2, [3, 4, [5, 6, 7], [8, 9, [10, 11, [12, 13, [14, 15]], [16, [17, [18, 19, [20, 21]]]]]]]];
const flattenArr2 = flatten(arr2);

console.log(flattenArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(flattenArr2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
