const Question = require('./question');

function generatePaper(questions, totalMarks, difficultyLevels) {
  const filteredQuestions = questions.filter(question =>
    difficultyLevels.includes(question.difficulty.toLowerCase()) && question.marks <= totalMarks
  );

  const paper = [];
  let marksCovered = 0;

  while (marksCovered < totalMarks && filteredQuestions.length > 0) {
    const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
    const selectedQuestion = filteredQuestions[randomIndex];

    if (marksCovered + selectedQuestion.marks <= totalMarks) {
      paper.push(selectedQuestion);
      marksCovered += selectedQuestion.marks;
    }

    // Remove the selected question to prevent repetition
    filteredQuestions.splice(randomIndex, 1);
  }

  return paper;
}

module.exports = generatePaper;
