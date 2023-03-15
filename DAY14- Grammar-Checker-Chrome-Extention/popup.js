document.getElementById("checkButton").addEventListener("click", () => {
    const text = document.getElementById("input").value;
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "checkGrammar", text: text }, response => {
        const resultElement = document.getElementById("result");
        resultElement.innerHTML = JSON.stringify(response.result, null, 2);
      });
    });
  });  