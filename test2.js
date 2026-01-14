const data = [
    {
        question: "Perro",
        a: "Dog",
        b: "Cat",
        c: "Mouse",
        d: "Bird",
        // d = answer
        correct: "a"
    },
    {
        question: "Escuela",
        a: "Park",
        b: "Church",
        c: "School",
        d: "House",
        correct: "c"
    },
    {
        question: "Agua",
        a: "Milk",
        b: "America",
        c: "Elephant",
        d: "Water",
        correct: "d"
    },
    {
        question: "Amigo"
        ,
        a: "Brother",
        b: "Friend",
        c: "Sister",
        d: "Enemy",
        correct: "b"
    },
    {
        question: "Sol",
        a: "Morning",
        b: "Moon",
        c: "Afternood",
        d: "Sun",
        correct: "ds "
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
