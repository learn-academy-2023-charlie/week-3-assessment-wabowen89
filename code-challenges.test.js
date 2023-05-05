// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Pseudo Code:
  // Input: Number
  // Output: An array
  // Process:
    // Function Name: fibSequence 
    // Create the function with a paramenter labeled "number"
    // Create create fibArray array variable with 2 elements
    // Create a for loop to iterate for the length of the input number
    // For each iteration, add current index value and next index value together
    // Use .push to add the combined values to the existing array
    // return the completed array
  // Expected Output:[1, 1, 2, 3, 5, 8]
                  // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

                  
describe("fibSequence", () => {
  it ("determines the length of the required array and outputs the Fibonacci sequence up to given length", () => {
    const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    
  })
})

// Good failure due to fibSquence() not defined
// FAIL  ./code-challenges.test.js
// fibSequence
//   ✕ determines the length of the required array and outputs the Fibonacci sequence up to given length

// ● fibSequence › determines the length of the required array and outputs the Fibonacci sequence up to given length

//   ReferenceError: fibSequence is not defined



// b) Create the function that makes the test pass.



const fibSequence = (number) => {
  let fibArray =[1, 1]

  for (let i = 0; i < number - 2; i++){

    fibArray.push(fibArray[i] + fibArray[i + 1])

  }
  return fibArray
}

// Success
// PASS  ./code-challenges.test.js
// fibSequence
//   ✓ determines the length of the required array and outputs the Fibonacci sequence up to given length (2 ms)


// Refactor
// Pseudo Code:
  // Input: Number
  // Output: An array
  // Process:
    // Function Name: fibSequence 
    // 
  // Expected Output:[1, 1, 2, 3, 5, 8]
                  // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

// Pseudo Code:
  // Input: an object
  // Output: An array
  // Process:
    // Function Name: sortLeastGreatest 
    // Create function with an object as a parameter
    // Convert the object values into an array (possible tool: Object.value() method)
    // Sort the array into the order of least to greatest (possible tool: .sort() method)
    // Return a new array with the sorted values
  // Expected Output: [15, 15, 20, 30, 30, 60, 90]
                   // [10, 15, 20, 45, 60, 65, 100]

describe("sortLeastGreatest", () => {
  it ("returns a sorted array of the object values from least to greatest", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    // Expected output: [15, 15, 20, 30, 30, 60, 90]
    
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    // Expected output: [10, 15, 20, 45, 60, 65, 100]
    expect(sortLeastGreatest(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(sortLeastGreatest(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
    
  })
})

// Good failure due to sortLeastGreatest() not defined
// FAIL  ./code-challenges.test.js
// fibSequence
//   ✓ determines the length of the required array and outputs the Fibonacci sequence up to given length (1 ms)
// sortLeastGreatest
//   ✕ returns a sorted array of the object values from least to greatest (1 ms)

// ● sortLeastGreatest › returns a sorted array of the object values from least to greatest

// b) Create the function that makes the test pass.

const sortLeastGreatest = (object) => {
  const valArray = Object.values(object)
  return valArray.sort(function(a,b) { 
    return a - b 
  })
}

// Success
// PASS  ./code-challenges.test.js
// fibSequence
//   ✓ determines the length of the required array and outputs the Fibonacci sequence up to given length (1 ms)
// sortLeastGreatest
//   ✓ returns a sorted array of the object values from least to greatest (1 ms)



// Refactor
// Pseudo Code:
  // Input: an object
  // Output: An array
  // Process:
    // Function Name: sortLeastGreatest 
    // Create function with an object as a parameter
    // Convert the object values into an array (possible tool: Object.value() method)
    // 
  // Expected Output: [15, 15, 20, 30, 30, 60, 90]
                   // [10, 15, 20, 45, 60, 65, 100]

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// Pseudo Code:
  // Input: An array
  // Output: A new array of the accumulated sums
  // Process:
    // Function Name: addArraySums
    // Create function with an array as a parameter
    // Create temporary value and assign it 0
    // iterate through the argument (possible tool: .map())
    // Add the current array value to the temporary value
    // Return the new value
  // Expected Output:[100, 83, 60, 51]
                  // [250, 161, 261, 165]
                  // []

describe("addArraySums", () => {
  it ("returns new array of accumulated sums", () => {
    
    const accountTransactions1 = [100, -17, -23, -9]
    // Expected output: [100, 83, 60, 51]
    const accountTransactions2 = [250, -89, 100, -96]
    // Expected output: [250, 161, 261, 165]
    const accountTransactions3 = []
    // Expected output: []

    expect(addArraySums(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(addArraySums(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(addArraySums(accountTransactions3)).toEqual([])
    
  })
})

// Good failure due to addArraySums() not defined
// FAIL  ./code-challenges.test.js
// fibSequence
//   ✓ determines the length of the required array and outputs the Fibonacci sequence up to given length (1 ms)
// sortLeastGreatest
//   ✓ returns a sorted array of the object values from least to greatest
// addArraySums
//   ✕ returns new array of accumulated sums (1 ms)


// b) Create the function that makes the test pass.

const addArraySums = (array) => {
  let tempNum = 0
  return array.map(value => {
    tempNum = tempNum + value
    return tempNum
  })

}

// Success
// PASS  ./code-challenges.test.js
// fibSequence
//   ✓ determines the length of the required array and outputs the Fibonacci sequence up to given length (1 ms)
// sortLeastGreatest
//   ✓ returns a sorted array of the object values from least to greatest
// addArraySums
//   ✓ returns new array of accumulated sums (1 ms)



// Refactor
