//circular progress bar

let cirProgressBar = document.querySelector(".circular");
let valueContainer = document.querySelector(".value");
console.log(cirProgressBar, valueContainer);

let progressValue = 0;
let progressEndValue = 85;
let speed = 40;

let progressInterval = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    cirProgressBar.style.background = `conic-gradient(#ef33dc ${progressValue * 3}deg, #810474 ${progressValue * 3}deg)`;
    if (progressValue == progressEndValue) {
        clearInterval(progressInterval);
    }
    }, speed);


//horizontal progress bar

const pspan = document.querySelectorAll('.pbar span');

pspan.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
});