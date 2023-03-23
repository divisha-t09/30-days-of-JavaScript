const container = document.querySelector(".container"),
  searchInput = container.querySelector("input"),
  synonyms = container.querySelector(".meaning  .list"),
  volumeIcon = container.querySelector(".word a");
infoText = container.querySelector(".info");

let audio;

function data(result, word) {
  if (result.title) {
    infoText.innerHTML = `Can't find the meaning of ${word}.`;
  } else {
    container.classList.add("active");
    let definitions = result[0].meanings[0].definitions[0],
      phoenetics = `${result}[0].meanings[0].partOfSpeech} / ${result[0].phoenetics[0].text}/`;

    document.querySelector(".word p").innerText = result[0].word;
    document.querySelector(".meaning span").innerText = definitions.definition;
    document.querySelector(".word span").innerText = phoenetics;
    audio = new Audio("https:" + result[0].phoenetics[0].audio);

    
    if (definitions.synonyms[0] == undefined) {
      synonyms.parentElement.style.display = "none";
    } else {
      synonyms.parentElement.style.display = "block";
      synonyms.innerHTML = "";
      for (let i = 0; i < 5; i++) {
        let tag = `${definitions.synonyms[i]}`;
        synonyms.insertAdjacentHTML("beforeend", tag);
      }
    }
  }
}

function fetchApi(word) {
  infoText.style.color = "#000";
  infoText.innerText = `Searching the meaning of "${word}"`;
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  fetch(url)
    .then((res) => res.json())
    .then((result) => data(result, word));
}

searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && e.target.value) {
    fetchApi(e.target.value);
  }
});

volumeIcon.addEventListener("click", () => {
  audio.play();
});
