// Algoritmo para gerar a sequência de Fibonacci, onde cada número é a soma dos dois anteriores.

function fibonacciSequence(sequenceSize) {
  let currentSequence = 1,
    previousSequence = 0;

  for (sequence = 0; sequence < sequenceSize; sequence++) {
    console.log(currentSequence);

    [previousSequence, currentSequence] = [currentSequence, currentSequence + previousSequence];
  }
}

fibonacciSequence(100);
