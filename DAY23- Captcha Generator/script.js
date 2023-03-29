const captcha = document.querySelector(".captchatext"),
refreshBtn = document.querySelector(".captcha-refresh"),
inputField = document.querySelector ("input"),
checkBtn = document.querySelector(".check-btn");

let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', '0',
'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
'e', 'f', 'g', 'h', 'i', 'j', 'k', '1', 'm', 'n', 'o', 'p', 'q', 'r',
't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getCaptcha() {
    for (let i = 0; i < 6; i++) { 
        let randomChar = allCharacters[Math.floor(Math.random()* allCharacters.length)];
        captcha.innerText += `${randomChar}`; 
    }
}

refreshBtn.addEventListener("click", ()=>{
    captcha.innerText = "";
    getCaptcha();
});

getCaptcha();