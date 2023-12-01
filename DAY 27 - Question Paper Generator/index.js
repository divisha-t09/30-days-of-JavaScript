const readline = require('readline');
const generatePaper = require('./generatePaper');
const sampleQuestions = require('./questiondata');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function collectUserInput() {
  return new Promise((resolve, reject) => {
    rl.question('Enter total marks required for the paper: ', totalMarks => {
      rl.question('Enter desired percentage for easy questions: ', easyPercentage => {
        rl.question('Enter desired percentage for medium questions: ', mediumPercentage => {
          rl.question('Enter desired percentage for hard questions: ', hardPercentage => {
            const marks = parseInt(totalMarks);
            const easy = parseInt(easyPercentage);
            const medium = parseInt(mediumPercentage);
            const hard = parseInt(hardPercentage);

            if (!marks || isNaN(marks) || marks <= 0 || easy < 0 || medium < 0 || hard < 0 || easy + medium + hard !== 100) {
              reject(new Error('Please enter valid input. Total marks must be a positive number and percentages should sum up to 100.'));
            } else {
              resolve({ totalMarks: marks, percentages: { easy, medium, hard } });
            }

            rl.close(); 
          });
        });
      });
    });
  });
}

async function generatePaperFromUserInput() {
  try {
    const userInput = await collectUserInput();
    const { totalMarks, percentages } = userInput;
    const { easy, medium, hard } = percentages;

    const easyMarks = Math.round((totalMarks * easy) / 100);
    const mediumMarks = Math.round((totalMarks * medium) / 100);
    const hardMarks = Math.round((totalMarks * hard) / 100);

    const generatedPaper = [
      ...generatePaper(sampleQuestions, easyMarks, 'easy'),
      ...generatePaper(sampleQuestions, mediumMarks, 'medium'),
      ...generatePaper(sampleQuestions, hardMarks, 'hard')
    ];

    console.log("Generated Question Paper:");
    generatedPaper.forEach((question, index) => {
      console.log(`${index + 1}. ${question.question}`);
    });
  } catch (error) {
    console.error(error.message);
  } finally {
    rl.close(); 
  }
}

generatePaperFromUserInput();
