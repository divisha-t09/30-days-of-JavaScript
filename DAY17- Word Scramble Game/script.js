const wordText = document.querySelector(".s-word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time button")
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".new"),
checkhBtn = document.querySelector(".submit");

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        alert(`Time off! ${correctWord.toLocaleUpperCase()} was the correct word`);
        initGame();
    }, 1000);
}

const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words,length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if(userWord) return alert("Please enter a word");
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not the correct word`);
    alert(`Congrats, You guessed the correct word ${userWord.toLocaleUpperCase()}`);
    initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);