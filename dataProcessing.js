Here's a complex JavaScript code example named "dataProcessing.js" that demonstrates a data processing scenario using various techniques such as closures, recursion, error handling, and array manipulation:

```javascript
/*
  dataProcessing.js: Complex Data Processing Example
  
  This code demonstrates a scenario where we receive a nested array of student information,
  process it, and generate summary details.
  
  Steps:
  1. Create a nested array of student data with name, age, and grades.
  2. Process the data to calculate average and total grades.
  3. Generate summary details for each student.
  4. Output the summary details.
*/

const studentData = [
  ["John Doe", 19, [85, 90, 95]],
  ["Jane Smith", 20, [75, 80, 70]],
  ["Alex Johnson", 18, [95, 80, 90]],
  ["Sarah Williams", 21, [90, 85, 80]],
];

// Function to calculate the average of an array of numbers
function calculateAverage(grades) {
  const sum = grades.reduce((acc, curr) => acc + curr, 0);
  return sum / grades.length;
}

// Function to calculate the total of an array of numbers
function calculateTotal(grades) {
  return grades.reduce((acc, curr) => acc + curr, 0);
}

// Function to generate a summary for each student
function generateStudentSummary(name, age, grades) {
  const averageGrade = calculateAverage(grades);
  const totalGrade = calculateTotal(grades);

  return `${name} (age ${age}) - Average Grade: ${averageGrade.toFixed(
    2
  )}, Total Grade: ${totalGrade}`;
}

// Function to process the student data and generate summaries
function processStudentData(data) {
  if (!Array.isArray(data)) {
    throw new Error("Invalid data format. Expected an array.");
  }

  const summaries = [];

  // Recursive function to iterate through nested arrays
  function processNestedArray(arr) {
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        processNestedArray(item); // Recursion
      } else {
        const [name, age, grades] = item;
        const summary = generateStudentSummary(name, age, grades);
        summaries.push(summary);
      }
    });
  }

  processNestedArray(data);

  return summaries;
}

// Main code execution
try {
  const studentSummaries = processStudentData(studentData);

  studentSummaries.forEach((summary) => {
    console.log(summary);
  });
} catch (error) {
  console.error("An error occurred:", error.message);
}
```

Note: This code's primary purpose is to showcase various programming techniques and best practices. In an actual production scenario, you would typically split this code into modular chunks and handle dependencies appropriately.