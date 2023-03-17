const textarea = document.querySelector(".content textarea"),
list = document.querySelector(".options select"),
btn = document.querySelector("button");

let synth = speechSynthesis,
isSpeaking = true;

voices();

function voices(){
    for(let voice of synth.getVoices()){
        let selected = voice.name === "Google US English" ? "selected" : "";
        let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
        list.insertAdjacentHTML("beforeend", option);
    }
}

synth.addEventListener("voiceschanged", voices);
function textToSpeech(text){
    let utterance = new SpeechSynthesisUtterance(text);
    for(let voice of synth.getVoices()){
        if(voice.name === list.value){
            utterance.voice = voice;
        }
    }
    synth.speak(utterance);
}

btn.addEventListener("click", e =>{
    e.preventDefault();
    if(textarea.value !== ""){
        if(!synth.speaking){
            textToSpeech(textarea.value);
        }
        if(textarea.value.length > 80){
            setInterval(()=>{
                if(!synth.speaking && !isSpeaking){
                    isSpeaking = true;
                    btn.innerText = "Convert To Speech";
                }else{
                }
            }, 500);
            if(isSpeaking){
                synth.resume();
                isSpeaking = false;
                btn.innerText = "Pause Speech";
            }else{
                synth.pause();
                isSpeaking = true;
                btn.innerText = "Resume Speech";
            }
        }else{
            btn.innerText = "Convert To Speech";
        }
    }
});
