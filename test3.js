const data = [
    {
        question: " What animal can hold its breath the longest underwater?",
        a: "Sperm whale",
        b: "Elephant seal",
        c: "Sea turtle",
        d: "Blue whale",
        // d = answer
        correct: "a"
    },
    {
        question: "What mammal lays eggs?",
        a: "Kangaroo",
        b: "Sloth",
        c: "Platypus",
        d: "Armadillo",
        correct: "c"
    },
    {
        question: "What is the only bird that can fly backward?",
        a: "Eagle",
        b: "Hummingbird",
        c: "Finch",
        d: "Parrot",
        correct: "b"
    },
    {
        question: "Which animal can survive in space?"
        ,
        a: "Water bear",
        b: "Hippo",
        c: "Grizzly bear",
        d: "Jellyfish",
        correct: "a"
    },
    {
        question: "What creature has blue blood due to copper-based hemocyanin?",
        a: "Lobster",
        b: "Starfish",
        c: "Octopus",
        d: "Jellyfish",
        correct: "d"
    }
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionE1 = document.getElementById("question")
const optionA = document.getElementById("optionA")
const optionB = document.getElementById("optionB")
const optionC = document.getElementById("optionC")
const optionD = document.getElementById("optionD")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = data[currentQuiz]

    questionE1.innerText = currentQuizData.question
    optionA.innerText = currentQuizData.a
    optionB.innerText = currentQuizData.b
    optionC.innerText = currentQuizData.c
    optionD.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    })
}

function getSelected(){
    let answer
    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener("click", () =>{
    const answer = getSelected()

    if(answer){
        if (answer === data[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz < data.length){
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${data.length} questions correctly</h2>
                <button onclick="location.reload()">Do it Again</button>
            `
        }
    }
})
