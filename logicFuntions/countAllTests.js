function countAllTests(allTests) {
    const allValidTests = allTests.filter((logicTest) => logicTest.is_a_valid_test);
    const allInvalidTests = allTests.filter((logicTest) => !logicTest.is_a_valid_test);
  
    const quantityOfValidTest = allValidTests ? allValidTests.length : 0;
    const quantityOfInvalidTest = allInvalidTests ? allInvalidTests.length : 0;
  
    const totalTests = quantityOfValidTest + quantityOfInvalidTest;
    const ratioFromValidTests = quantityOfValidTest / totalTests;
  
    const allDataForReturn = {
      count_valid: quantityOfValidTest,
      count_invalid: quantityOfInvalidTest,
      ratio: parseFloat(ratioFromValidTests.toFixed(1)) || 0,
    };
    return allDataForReturn;
  }

  module.exports = countAllTests;