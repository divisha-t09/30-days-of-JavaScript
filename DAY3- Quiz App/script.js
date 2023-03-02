const startButton =  document.getElementById('strt-btn')
const nextButton =  document.getElementById('nxt-btn')
const questionContainerElement = document.getElementById('question-section')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('ans-btn')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('started')
    startButton.classList.add('hidden')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hidden')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hidden')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hidden')
    } else {
        startButton.innerHTML = 'RESTART'
        startButton.classList.remove('hidden')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is the name of the Hogwarts caretaker?',
        answers: [
            { text: 'Hagrid', correct: false },
            { text: 'Filch', correct: true },
            { text: 'Snape', correct: false },
            { text: 'Dumbledore', correct: false }
        ]
    },
    {
        question: 'What is the name of the Weasley family owl?',
        answers: [
            { text: 'Pigwidgeon', correct: false },
            { text: 'Errol', correct: true },
            { text: 'Hedwig', correct: false },
            { text: 'Crookshanks', correct: false }
        ]
    },
    {
        question: 'What type of dragon did Harry face in the Triwizard Tournament?',
        answers: [
            { text: 'Hungarian Horntail', correct: true },
            { text: 'Chinese Firebal', correct: false },
            { text: 'Swedish Short-Snout', correct: false },
            { text: 'Welsh Green', correct: false }
        ]
    },
    {
        question: 'Which animal represents Hufflepuff house?',
        answers: [
            { text: 'Lion', correct: false },
            { text: 'Badger', correct: true },
            { text: 'Snake', correct: false },
            { text: 'Eagle', correct: false }
        ]
    },
    {
        question: 'Who is the ghost of Ravenclaw house?',
        answers: [
            { text: 'Nearly Headless Nick', correct: false },
            { text: 'The Grey Lady', correct: true },
            { text: 'The Fat Friar', correct: false },
            { text: 'The Bloody Baron', correct: false }
        ]
    },
    {
        question: 'What is the name of the spell that unlocks doors?',
        answers: [
            { text: 'Wingardium Leviosa', correct: false },
            { text: 'Alohomora', correct: true },
            { text: 'Lumos', correct: false },
            { text: 'Expelliarmus', correct: false }
        ]
    },
    {
        question: 'Which Hogwarts professor teaches Transfiguration?',
        answers: [
            { text: 'Professor Snape', correct: false },
            { text: 'Professor McGonagall', correct: true },
            { text: 'Professor Flitwick', correct: false },
            { text: 'Professor Sprout', correct: false }
        ]
    },
    {
        question: 'What is the name of the Hogwarts Express trolley lady?',
        answers: [
            { text: 'Mrs. Norris', correct: false },
            { text: 'Madame Rosmerta', correct: true },
            { text: 'Mrs. Weasley', correct: false },
            { text: 'Doris Crockford', correct: false }
        ]
    },
    {
        question: 'What is the name of the potion that allows the drinker to transform into someone else?',
        answers: [
            { text: 'Polyjuice Potion', correct: true },
            { text: 'Veritaserum', correct: false },
            { text: 'Amortentia', correct: false },
            { text: 'Felix Felicis', correct: false }
        ]
    },
    {
        question: 'Who is the headmaster of Hogwarts in the first book?',
        answers: [
            { text: 'Albus Dumbledore', correct: false },
            { text: 'Severus Snape', correct: false },
            { text: 'Minerva McGonagall', correct: false },
            { text: 'Armando Dippet', correct: true }
        ]
    }
]