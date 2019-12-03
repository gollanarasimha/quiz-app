const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
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
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
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
    question: 'What is my favourite food?',
    answers: [
      { text: 'Pizza', correct: true },
      { text: 'Chicken', correct: false },
      { text: 'Biryani', correct: false },
      { text: 'Fruits', correct: false }
    ]
  },
  {
    question: 'RQP, ONM, LKJ, _____, FED',
    answers: [
      { text: 'IHG', correct: true },
      { text: 'JKL', correct: false },
      { text: 'CAB', correct: false },
      { text: 'GHI', correct: false }
    ]
  },
  {
    question: 'KBJ, LCK, MDL, NEM, _____',
    answers: [
      { text: 'OEP', correct: false },
      { text: 'OFN', correct: true },
      { text: 'MEN', correct: false },
      { text: 'PFQ', correct: false }
    ]
  },
  {
    question: 'Team A has scored more goals than Team B, Team C has scored fewer goals than Team B, Team A has scored fewer goals than Team C: If the first two statements are true, the third statement is',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true },
      { text: 'Uncertain', correct: false },
      { text: 'None of the above', correct: false}
    ]
   },
     {
    question: 'KBJ, LCK, MDL, NEM, _____',
    answers: [
      { text: 'OEP', correct: false },
      { text: 'OFN', correct: true },
      { text: 'MEN', correct: false },
      { text: 'PFQ', correct: false }
    ]
  },
  {
    question: 'Find the next number in the sequence: 3, 6, 9, 30, 117......',
    answers: [
      { text: '192', correct: false },
      { text: '388', correct: false },
      { text: '352', correct: false },
      { text: '588', correct: true }
    ]
  }
  
]