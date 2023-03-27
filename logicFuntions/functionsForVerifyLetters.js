function checkSequenceInLetters(fromApiData) {
  const { letters } = fromApiData;
  if (!letters) return false;

  let totalOfSequences = 0;
  const lettersIdentifiers = ["B", "U", "D", "H"];
  const arrayWithLetterSequence = generateLetterSequence(lettersIdentifiers);
  const quantityOfHorizontalSequence = testHorizontalLetters(letters, arrayWithLetterSequence);
  totalOfSequences += quantityOfHorizontalSequence;
  if (totalOfSequences >= 2) return true;

  const quantityOfVerticalSequence = testVerticalLetters(letters, arrayWithLetterSequence);
  totalOfSequences += quantityOfVerticalSequence;
  if (totalOfSequences >= 2) return true;

  const quantityOfDiagonalsSequence = testDiagonalsLetters(letters, arrayWithLetterSequence);
  totalOfSequences += quantityOfDiagonalsSequence;
  if (totalOfSequences >= 2) return true;

  return false;
}

function testHorizontalLetters(lettersArray, identifiers) {
  const horizontalLettersIdentifierRepeat = lettersArray.filter((everyRow) =>
    identifiers.find((everyIdentifier) => everyRow.includes(everyIdentifier))
  );
  return horizontalLettersIdentifierRepeat.length;
}

function testVerticalLetters(lettersArray, identifiers) {
  const turnLettersVerticalArrayInHorizontal = lettersArray.reduce((acc, everyRow) => {
    for (let everyLetter in everyRow) {
      if (!acc[everyLetter]) acc[everyLetter] = [];
      acc[everyLetter] += everyRow[everyLetter];
    }
    return acc;
  }, []);

  const verticalLettersIdentifierRepeat = turnLettersVerticalArrayInHorizontal.filter((everyRow) =>
    identifiers.find((everyIdentifier) => everyRow.includes(everyIdentifier))
  );
  return verticalLettersIdentifierRepeat.length;
}

function testDiagonalsLetters(lettersArray, identifiers) {
  const matrixWithLetters = [];

  for (let row = 0; row < lettersArray.length; row++) {
    const turnStringToArray = [];
    for (let letterPosition = 0; letterPosition < lettersArray[row].length; letterPosition++) {
      turnStringToArray.push(lettersArray[row][letterPosition]);
    }
    matrixWithLetters.push(turnStringToArray);
  }

  const allSequencesWithFourLetterInData = findAllSequenceInDiagonal(matrixWithLetters);

  const diagonalLettersIdentifierRepeat = allSequencesWithFourLetterInData.filter((everyRow) =>
    identifiers.find((everyIdentifier) => everyRow.includes(everyIdentifier))
  );

  return diagonalLettersIdentifierRepeat.length;
}

function findAllSequenceInDiagonal(matrixWithAllLetters) {
  const allSequenceInDiagonals = [];

  for (let rowIdentifier = 0; rowIdentifier < matrixWithAllLetters.length; rowIdentifier++) {
    let downDiagonals = "";
    for (
      let everyCharacterInArray = 0;
      everyCharacterInArray < matrixWithAllLetters[rowIdentifier].length;
      everyCharacterInArray++
    ) {
      if (matrixWithAllLetters[rowIdentifier + everyCharacterInArray])
        downDiagonals +=
          matrixWithAllLetters[rowIdentifier + everyCharacterInArray][everyCharacterInArray];
    }
    allSequenceInDiagonals.push(downDiagonals);
    let upDiagonals = "";
    for (
      let everyCharacterInArray = 0;
      everyCharacterInArray < matrixWithAllLetters[rowIdentifier].length;
      everyCharacterInArray++
    ) {
      if (matrixWithAllLetters[rowIdentifier - everyCharacterInArray])
        upDiagonals +=
          matrixWithAllLetters[rowIdentifier - everyCharacterInArray][everyCharacterInArray];
    }
    allSequenceInDiagonals.push(upDiagonals);

    let rigthDiagonals = "";
    for (
      let everyCharacterInArray = 0;
      everyCharacterInArray < matrixWithAllLetters[rowIdentifier].length;
      everyCharacterInArray++
    ) {
      if (matrixWithAllLetters[rowIdentifier + everyCharacterInArray]) {
        rigthDiagonals +=
          matrixWithAllLetters[everyCharacterInArray][rowIdentifier + everyCharacterInArray];
      }
    }
    allSequenceInDiagonals.push(rigthDiagonals);
    let rigthUpDiagonals = "";
    let characterIdentifier = rowIdentifier;
    for (
      let everyCharacterInArray = matrixWithAllLetters.length - 1;
      everyCharacterInArray >= 0;
      everyCharacterInArray--
    ) {
      if (matrixWithAllLetters[everyCharacterInArray + rowIdentifier]) {
        rigthUpDiagonals +=
          matrixWithAllLetters[characterIdentifier][everyCharacterInArray + rowIdentifier];
        if (characterIdentifier < matrixWithAllLetters.length) characterIdentifier++;
      }
    }

    allSequenceInDiagonals.push(rigthUpDiagonals);
  }

  const turnUniqueData = allSequenceInDiagonals.reduce((acc, everyData) => {
    acc[everyData] = "";
    return acc;
  }, {});

  return Object.keys(turnUniqueData).filter((everyDiagonal) => everyDiagonal.length >= 4);
}

function generateLetterSequence(lettersIdentifiers) {
  const generatedSequenceOfLetters = lettersIdentifiers.map((letter) => letter.repeat(4));

  return generatedSequenceOfLetters;
}

module.exports = checkSequenceInLetters;
