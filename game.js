const wordText = document.querySelector(".word"),
    hintText = document.querySelector(".hint span"),
    refreshBtn = document.querySelector(".refresh-word"),
    checkBtn = document.querySelector(".check-word"),
    startBtn = document.querySelector(".start-game"),
    addBtn = document.querySelector(".add-term"),
    userWordInput = document.querySelector(".user-term"),
    userHintInput = document.querySelector(".user-hint");

let correctWord,timer,currentIndex=0;

let termHintPairs =[];

let wordList = JSON.parse(localStorage.getItem("scrambleWords")) || [];
window.wordList = wordList;

console.log("Word list:", wordList);

const initTimer =maxTime => {
    clearInterval(timer);
    const timeText = document.querySelector(".time span b");
    timeText.innerText = maxTime;

    timer=setInterval(() => {
        if(maxTime >0 ) {
            maxTime--;
            timeText.innerText =maxTime;
        } else{
        clearInterval(timer);
        alert(`Times Up ${correctWord.toUpperCase()} was the correct word`);
        }
    },1000);
};

const shuffleWord = (word) => {
    let array = word.split("");
    let shuffled = word;

    while(shuffled === word && array.length > 1 ) {
        for (let i = array.length -1; i> 0; i--){
            let j = Math.floor(Math.random()* (i + 1));
            [array[i], array[j]]= [array[j], array[i]];
        }
        shuffled = array.join("");
    }
    return array.join("");
}

const pickRandomWord= () => {
    if(wordList.length ===0) {
        alert("There are no words available. Make sure to add at least one term.");
        return;
    }

    let entry = wordList[currentIndex];
   
    correctWord = entry.word.toLowerCase();
    wordText.innerText=shuffleWord(correctWord);
    hintText.innerText=entry.hint;
    initTimer(30);
};

const startGame= () => {
    if (wordList.length ===0) {
        alert("Make sure to add at least one term before pressing start.");
        return;
    }
    currentIndex=0;
    pickRandomWord();
};

const addTerm= () => {
    console.log("Add term Clicked");

   const word = userWordInput.value.trim();
   const hint = userHintInput.value.trim();

   if (!word || !hint) {
    return alert ("Make sure to enter both a word and its hint before pressing start.")
   }

    wordList.push({word,hint });
    localStorage.setItem("scrambleWords", JSON.stringify(wordList));
    alert(`Added Term: "${word}" with hint "${hint} `)

    userWordInput.value = "";
    userHintInput.value = "";

};


const checkWord = () => {
    const userAnswer= prompt("Enter your guess: ");

    if (!userAnswer) return;

    if(userAnswer.trim().toLowerCase() === correctWord.toLowerCase()) {
         alert(`correct! ${correctWord.toUpperCase()} is the right word.`);
} else {
     alert(`Incorrect. THe correct word was ${correctWord.toUpperCase()}`);
    }
    moveToNextWord();
};

const moveToNextWord = () => {
    currentIndex++;
    if (currentIndex >=wordList.length) {
        alert("You have completed all terms");
        currentIndex=0;
    }
    pickRandomWord();
};

refreshBtn.addEventListener("click", pickRandomWord);
checkBtn.addEventListener("click", checkWord);
startBtn.addEventListener("click", startGame);
addBtn.addEventListener("click",addTerm);
